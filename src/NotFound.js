import { useHistory } from "react-router-dom";
import React from "react";

const NotFound = (props) => {
    
    const history = useHistory()

    return (
        <div>
           <h1>주소가 올바르지 않아요!</h1>
        <button onClick={() => {
            history.push("/") //props의 history로 이동해서 push(=페이지 이동)
        }}>뒤로가기</button>
        </div>
        
    );
};

export default NotFound;