// bucket.js

// Actions 
// project 이름 / 모듈명 / 수정, 만들기, 업뎃, 리무브
const CREATE = 'bucket/CREATE';
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩하기"]
}

// Action Creators
 
export function createBucket(bucket){
    console.log("액션을 생성할거야")  //1.액션생성
    return {type: CREATE, bucket}; //자바스크립트에서 key, value 같으면 축약해서 하나로 쓸수있음. {widget:widget} = {widget}
};

// Reducer
export default function reducer(state = initialState, action = {}) {    //state , action 의 기본값은 빈 값.
    
    switch (action.type) {
        case "bucket/CREATE" :  {  //리듀서에 넘어와서 bucket을 create해줌
            console.log("이제 값을 바꿀거야!!!!!!")
            const new_bucket_list = [...state.list, action.bucket];
            return {list : new_bucket_list};        
        }
        default:
         return state;
    
         
    } 
 }

 

 