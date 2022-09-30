import { useState } from "react";
import { useNavigate } from "react-router-dom";

import apiPath from "../../api/apiPath";

import MPBtn from "../ui/MPBtn";
import SWBtnPBrd from "../ui/SWBtnPBrd";
import "./SignUpForm.css";

const SellerForm = () => {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [companyNumber, setCompanyNumber] = useState("");
  const [phone, setPhone] = useState("");

  // const [isValidLoginId, setIsValidLoginId] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState(null);
  // const [isValidName, setIsValidName] = useState(null);
  const [isValidCompanyNumber, setIsValidCompanyNumber] = useState(null);
  const [isValidPhone, setIsValidPhone] = useState(null);

  async function signUp(loginId, password, name, companyNumber, phone) {
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(apiPath.user.seller(), {
      method: "POST",
      body: JSON.stringify({
        loginId: loginId,
        password: password,
        name: name,
        companyNumber: companyNumber,
        phone: phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const data = await response.json();
    navigate("/login");
  }
  // 전화번호 형식
  // useEffect(() => {
  //   if (phone.length === 8) {
  //     setPhone(phone.replace(/(\d{3})(\d{4})(\d{1})/, "$1-$2-$3"));
  //   }
  //   if (phone.length === 11) {
  //     setPhone(phone.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
  //   }
  // }, [phone]);

  const signUpHandler = (e) => {
    e.preventDefault();

    if (!(isValidCompanyNumber === null && isValidPassword === null && isValidPasswordCheck === null && isValidPhone === null)) {
      alert("입력한 내용을 다시 확인해주세요");
      return;
    }

    signUp(loginId, password, name, companyNumber, phone);
    setLoginId("");
    setPassword("");
    setPasswordCheck("");
    setName("");
    setCompanyNumber("");
    setPhone("");
  };

  const checkPassword = (e) => {
    const pattern1 = /[0-9]/;
    const pattern2 = /[a-zA-Z]/;
    const pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;
    if (e.target.value.length === 0) {
      setIsValidPassword(null);
    } else if (!pattern1.test(e.target.value) || !pattern2.test(e.target.value) || !pattern3.test(e.target.value) || e.target.value.length < 8) {
      setIsValidPassword("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성되어야 합니다");
    } else {
      setIsValidPassword(null);
    }
  };

  const checkPasswordCheck = (e) => {
    if (e.target.value.length === 0) {
      setIsValidPasswordCheck(null);
    } else if (e.target.value !== password) {
      setIsValidPasswordCheck("비밀번호가 일치하지 않습니다");
    } else {
      setIsValidPasswordCheck(null);
    }
  };

  const checkPhone = (e) => {
    const pattern = /^[0-9]+$/g;
    if (e.target.value.length === 0) {
      setIsValidPhone(null);
    } else if (!pattern.test(e.target.value)) {
      setIsValidPhone(<p>숫자만 입력해 주세요</p>);
    } else if (e.target.value.length !== 11 || e.target.value.substring(0, 3) !== "010") {
      setIsValidPhone(<p>올바른 전화번호를 입력해주세요</p>);
    } else {
      setIsValidPhone(null);
    }
  };

  const checkCompanyNumber = (e) => {
    const pattern = /^[0-9]+$/g;
    if (e.target.value.length === 0) {
      setIsValidCompanyNumber(null);
    } else if (!pattern.test(e.target.value)) {
      setIsValidCompanyNumber(<p>숫자만 입력해 주세요</p>);
    } else if (e.target.value.length !== 10) {
      setIsValidCompanyNumber(<p>올바른 번호를 입력해주세요</p>);
    } else {
      setIsValidCompanyNumber(null);
    }
  };

  const loginIdChangeHandler = (e) => {
    setLoginId(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    checkPassword(e);
  };
  const passwordCheckChangeHandler = (e) => {
    setPasswordCheck(e.target.value);
    checkPasswordCheck(e);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const companyNumberChangeHandler = (e) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    setCompanyNumber(onlyNumber);
    checkCompanyNumber(e);
  };
  const phoneChangeHandler = (e) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    setPhone(onlyNumber);
    checkPhone(e);
  };

  return (
    <div>
      <form onSubmit={signUpHandler}>
        <div className="inputgroup">
          <label>아이디</label>
          <input type="text" value={loginId} onChange={loginIdChangeHandler} placeholder="아이디를 입력해주세요" />
          <br />
          <label>비밀번호</label>
          <input type="password" value={password} onChange={passwordChangeHandler} placeholder="비밀번호를 입력해주세요" data-for="PassChecking" data-tip />
          {isValidPassword}
          <br />
          <label>비밀번호 확인</label>
          <input type="password" value={passwordCheck} onChange={passwordCheckChangeHandler} placeholder="비밀번호를 한번 더 입력해주세요" data-for="PassCheckChecking" data-tip />
          {isValidPasswordCheck}
          <br />
          <label>업체명</label>
          <input type="text" value={name} onChange={nameChangeHandler} placeholder="업체명을 입력해주세요" />
          <br />
          <label>사업체 등록번호</label>
          <input className="info_add" type="email" value={companyNumber} onChange={companyNumberChangeHandler} placeholder="사업체 번호을 입력해주세요" />
          <SWBtnPBrd className="info_confirm">사업자 인증</SWBtnPBrd>
          {isValidCompanyNumber}
          <br />
          <label>전화번호</label>
          <input value={phone} onChange={phoneChangeHandler} placeholder="숫자만 입력해주세요" maxLength="13" />
          {isValidPhone}
          <br />
        </div>
        <MPBtn type="submit" onClick={signUpHandler}>
          가입하기
        </MPBtn>
      </form>
    </div>
  );
};

export default SellerForm;
