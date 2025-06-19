import { useEffect, useState } from "react";
const quotes=[
    "행복은 가까운 곳에 있다. 마음속에서 만족을 얻지 못하면 행복할 수 없다.",
    "불가능은 하나의 의견일 뿐, 도전할 수 있는 가능성을 의미한다.",
    "재앙도 가치가 있다. 모든 실패가 날아가고 새로 시작할 기회를 준다.",
    "욕망을 충족시키려 하기보다 제한함으로써 행복을 구하는 법을 배웠다.",
    "나는 어떤 일을 시작하든 반드시 된다는 확신 90%, 할 수 있다는 자신 10%로 일한다.",
    "세상을 어떻게 바라보느냐에 따라 행복하기도 하고 불행하기도 한다.",
    "적극적 사고방식이 결국 성공과 행복을 만든다.",
    "행동이 곧 실천이다. 기업은 행동으로 이루어진다.",
    "행복은 멀리 있지 않고, 손에 잡힐 만한 가까운 곳에 있다.",
    "우리는 포위됐다. 이제 모든 방향으로 공격할 수 있다!"
];

const Quote = () => {
    const [quote,setQuote] = useState('');
    //랜덤하게 명언 추출하기
    // Math.random(); //0~1만 출력가능 : 0 ~ quotes.laegth
    useEffect(()=>{
        const random = Math.floor(Math.random()*quotes.length);
        setQuote(quotes[random]);
    },[])
    
    return (
        <div className="quote">
            "{quote}"
        </div>
    );
};

export default Quote;