import { useEffect, useState } from "react";
import "./App.scss";
import LoginForm from "./Components/LoginForm";
import Time from "./Components/Time";
import MainPage from "./Components/MainPage";
import { click } from "@testing-library/user-event/dist/click";
import Weather from "./Components/Weather";
import Dark from "./Components/Dark";
// import bgImg from './images/img.jpg'; // 이미지 적용

const App = () => {
  const USER_KEY = "user_name";
  const [user,setUser] = useState('');
  const [dark,setDark] = useState(false);
  useEffect(()=>{
    const savedDark = localStorage.getItem("darkMode");
    if(savedDark !== null){
      setDark(savedDark === "true");
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("darkMode",dark.toString());
    if(dark){
      document.body.classList.add("dark");
    } else{
      document.body.classList.remove("dark");
    }
  },[dark])
  // 처음에 시작하자마자 user_name을 읽어와야 함
  useEffect(()=>{
    const saved = localStorage.getItem(USER_KEY);
    if(saved){
      setUser(saved);
    }
  },[])
  const handleLogin = (data)=>{
    localStorage.setItem(USER_KEY,data);
    setUser(data);
  }
  const handleLogout =()=>{
    localStorage.removeItem(USER_KEY);
    setUser(null);
  }
    const [greeting,setGreeting] = useState('');
      useEffect(()=>{
        const now = new Date();  //현재 시간을 가져오기
        const hour = now.getHours(); //0부터 23시까지 현재 시간을 알려줌
          if(hour >= 5 && hour < 12 ){
            setGreeting("상쾌한 아침이에요!")
          } else if(hour >= 12 && hour < 18 ){
            setGreeting("따뜻한 오후에요!")
          } else if(hour >= 18 && hour < 22 ){
            setGreeting("행복한 저녁이에요!")
          } else{ setGreeting("포근한 밤 되세요!")}
        },[]);
    const toggleDark = ()=>{
    setDark(prev => !prev);
    }
  return (
    <div className="app-nav">
    <Dark onDark={toggleDark} dark={dark}/>
    <Weather/>
    <div className="app">
      {/* <img src="./images/img.jpg" alt="이미지1"/> */}
      {/* <img src={`${process.env.PUBLIC_URL}/images/img.jpg`} alt="이미지1"/> */}
      {/* <img src={bgImg} alt="이미지1"/> */}
      <Time/>
      {
        user ? (<MainPage user={user} onLogout={handleLogout} greeting={greeting}/>) : (<LoginForm onLogin={handleLogin}/>)
      }
      </div>
      </div>
  );
};

export default App;