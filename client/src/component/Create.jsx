import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 
  return(
  <>
  <h1>비밀 게시물 업로드</h1>
  <div>
    <form
    onSubmit={async(e) => {
       e.preventDefault();
       const data = await axios({
        url: "http://localhost:3000/create",
        method: "POST",
        data: {
          title, 
          content
        },
        withCredentials: true,
       });      
       if(data.data!==null){
        nav("/");
        console.log("성공");
       }else{
        console.log("오류");
       }
    }}>
         <div >
            <label >
              <strong >제목</strong>
            </label>
            <input
              type="text"
              placeholder="제목"
              value={title}
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            >
            </input>
          </div>
          <div >
            <label>
              <strong >내용</strong>
            </label>
            <input
              type="text"
              placeholder="내용"
              value={content}
              name="content"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            >
            </input>
          </div>
          <div>
         
              <button type="submit">확인</button>
         
          </div>
      </form>
  </div>
  </>);
}

export default Create;