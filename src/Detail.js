import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Detail = (props) => {
    const index = useParams();  //url index 파라미터 주기
    const bucket_list = useSelector
    console.log(index)
    return(
        <h1>상세페이지 입니다!</h1>
    )
}

export default Detail;