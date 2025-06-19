
const TodoList = ({todos,onDelete,onToggle}) => {
    if( todos.length === 0 ){
        return <p>할일이 없습니다.</p>
    }
    return (
        <ul className="todolist">
            {
                todos.map((item)=>{
                    return ( 
                    <li key={item.id}>
                        <input type="checkbox"
                        onChange={()=>{onToggle(item.id)}}
                        checked={item.done}
                        />
                        <span style={
                            {textDecoration: item.done ? 'line-through' : 'none',
                            textDecorationColor: item.done ? 'rgba(65, 202, 248, 0.5)' : 'transparent',
                            textDecorationStyle: item.done ? 'soild' : 'noen',
                            textDecorationThickness: item.done ? '10px' : ''}}>
                            {item.todo}</span>
                        <button onClick={()=>{onDelete(item.id)}}>×</button>
                        </li>
                            )
                })
            }
        </ul>
    );
};

export default TodoList;