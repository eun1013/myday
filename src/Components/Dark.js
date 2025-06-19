import { useState } from "react";

const Dark = ({onDark,dark}) => {
    return (
        <div className="darkmode">
            <button
            onClick={onDark}>{dark ? "다크모드" : "라이트모드"}</button>
        </div>
    );
};

export default Dark;