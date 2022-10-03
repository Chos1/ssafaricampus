import React from 'react';
import './ModalBasic.module.css';

import { useState } from "react";

const ModalBasic = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, cont_pass } = props;

  const [password, setPassword] = useState("");

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const passCheck = (e) => {
    if (cont_pass === password){
      alert("asdasdasd")
      close()
    }else{
      alert("응 안돼")
    }
  }
  
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}
          <label for="contract_pass">비밀번호</label>
          <input type="password" value={password} onChange={passwordChangeHandler}/>
          </main>
          <footer>
            <button className="close" onClick={close}>
              닫기
            </button>
            <button className="accept" onClick={passCheck}>
              입력
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ModalBasic;