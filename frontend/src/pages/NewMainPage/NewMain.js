// packages
import { useNavigate } from "react-router-dom";
// css
import "./NewMain.css";
import LPBtn from "../../components/ui/LPBtn";
import LWBtnPBrd from "../../components/ui/LWBtnPBrd";
// assets
import { ReactComponent as Logo } from "../../assets/Logo.svg";
// import banner from "../../assets/배너.PNG";
// import groom from "../../assets/구름.jpg";
// import image1 from "../../assets/샐러드.jpg";
// import image2 from "../../assets/야채가게.jpg";

const NewMain = () => {
  const navigate = useNavigate();
  return (
    <div className="main_back">
      {/* <div>
        <img src={groom} alt="" className="img1" />
      </div> */}
      <div className="whole_box">
        <div className="logo_center">
          <Logo width="900px" className="center_img" />
        </div>
        {/* <img src={image1} alt="" className="img1" />
        <img src={image2} alt="" className="img2" /> */}
        <div className="main_new ">
          <LPBtn
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </LPBtn>
          <LWBtnPBrd
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </LWBtnPBrd>
        </div>
      </div>
    </div>
  );
};

export default NewMain;