import { useState } from "react";

const LoginForm = ({onLogin}) => {
    const [user,setUser] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        const trimmed = user.trim(); // 빈값이 있을 경우 처리
        if( trimmed ){ // 빈값이 아니라면
        onLogin(user);
        setUser(''); // input에 있던 값을 빈값으로 만들어줌
        }
    }
    return (
        <form className="login" onSubmit={handleSubmit} >
            <h2>Hello, what's your name?</h2>
            <div className="login-name">
            <input 
            value={user}
            type="text"
            placeholder="Enter your name"
            onChange={(e)=>{setUser(e.target.value)}}
            />
            <button type="submit">Login</button>
            </div>
        </form>
    );
};

export default LoginForm;