import { useState } from "react";

const TodoForm = ({onAdd}) => {
    const [task,setTask] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        const trimmed = task.trim();
        if(trimmed){
            //할일 텍스트를 main페이지(부모)에 전달해주기
        onAdd(task);
        setTask(''); //input의 입력되어있는 값 없애주기
        }
    }
    return (
        <form className="todoform" onSubmit={handleSubmit}>
            <input 
            type="text"
            value={task}
            onChange={(e)=>{setTask(e.target.value)}}
            placeholder="What’s your next to-do?"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;