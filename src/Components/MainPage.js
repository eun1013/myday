import { useEffect, useState } from "react";
import Quote from "../Quote";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const MainPage = ({user,onLogout,greeting}) => {
    const TODOS_KEY="todos";
    const [todos,setTodos] = useState([]);
    //처음에 localStrage에 저장된 todos값이 있으면 읽어와서 설정
    useEffect(()=>{
        const saved = localStorage.getItem(TODOS_KEY);
        if(saved){
            setTodos(JSON.parse(saved)); // 문자열을 객체로 만들어줌
        }
    },[]);
    //todos가 변경되면 localStrage에 저장
    useEffect(()=>{
        const saved = JSON.stringify(todos); // 객체를 문자열로 ...
        localStorage.setItem(TODOS_KEY,saved);
    },[todos]);
    const addTodo = (text)=>{
        /**
         * todo{ id:현재시간Date.now()(겹쳐지지 않는 값), text:} 
         * 로 구성이 되어야함(삭제하기 위해서)
         */
        const newTodo = {id:Date.now(), todo:text, done:false};
        setTodos([...todos,newTodo]);
    }
    const deleteTodo = (id)=>{ //todos에서 삭제 할 때
        const update = todos.filter((item)=>{
            return item.id !== id;
        });
        setTodos(update);
    }
    const toggleTodo = (id)=>{
    const update = todos.map((item)=>{
    return item.id === id ? {...item, done:!item.done} : item;
    });
    setTodos(update);
    }

    return (
        <div className="main">
            <div className="main-user">
            <h2>{user}님, {greeting}</h2>
            <button onClick={onLogout}>Logout</button>
            </div>
        <Quote/>
        <div className="todo">
        <TodoForm onAdd={addTodo}/>
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
        </div>
        </div>
    );
};

export default MainPage;
