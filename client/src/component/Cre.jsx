import axios from "axios";
import { useState } from "react";

const Create = () => {
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
        url: "http://localhost:5000/create",
        method: "POST",
        data: {
          title, 
          content
        },
       });      
       setTitle(data.data.title);
       setContent(data.data.content); 
    }}>
         <div >
            <label >
              <strong >제목</strong>
            </label>
            <input
              type="text"
              placeholder="제목"
              value={title}
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