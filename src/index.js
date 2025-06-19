import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 개발모드에서만 실행 안전하게 사용되는건지 리액트에서 체크하는 것 / use가 두번씩 실행되는게 이것 때문임
  // <React.StrictMode> 
    <App />
  // </React.StrictMode>
);

