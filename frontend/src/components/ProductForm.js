import { useState } from "react";
import "./ProductForm.css";
import MKBtn from "../components/ui/MKBtn";
import useEth from "../contexts/EthContext/useEth";
import { storage } from "../index.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ProductForm = () => {
  const {
    state: { contract, accounts },
  } = useEth();
  const [inputTitle, setInputTitle] = useState(""); // 상품명
  const [inputLineInfo, setInputLineInfo] = useState(""); // 한 줄 설명
  const [inputPrice, setInputPrice] = useState(""); // 상품 가격
  const [inputCategori, setInputCategori] = useState(""); // 카테고리
  const [inputThumbnail, setInputThumbnail] = useState(""); // 썸네일 사진
  const [inputDetail, setInputDetail] = useState(""); // 상세 사진
  const [inputExpressDue, setInputExpressDue] = useState(""); // 배송 기간
  const [inputInfo, setInputInfo] = useState(""); // 상품 설명
  const [imageSrc, setImageSrc] = useState("");

  const [url, setUrl] = useState("");

  // 파이어베이스
  const [fileList, setFileList] = useState([]); // 파일 리스트

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const [showImages, setShowImages] = useState([]);

  const handleTitleChange = (e) => {
    setInputTitle(e.target.value);
  };
  const handleLineInfoChange = (e) => {
    setInputLineInfo(e.target.value);
  };
  const handlePriceChange = (e) => {
    setInputPrice(e.target.value);
  };
  const handleExpressDueChange = (e) => {
    setInputExpressDue(e.target.value);
  };
  const handleInfoChange = (e) => {
    setInputInfo(e.target.value);
  };

  // const handleImageChange = (e) => {};

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    for (const image of event.target.files) {
      setFileList((prevState) => [...prevState, image]);
    }
    const imageLists = event.target.files;

    let imageUrlLists = [...showImages];
    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }
    setInputDetail(event.target.value);
    setShowImages(imageUrlLists);
  };

  const registItem = async (e) => {
    e.preventDefault();
    console.log(fileList);
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputTitle === "" || inputLineInfo === "" || inputPrice === "" || inputCategori === "" || inputThumbnail === "" || inputDetail === "" || inputExpressDue === "" || inputInfo === "") {
      alert("Please enter a value to write.");
      return;
    }

    try {
      // 업로드의 순서는 상관없으니 Promise.all로 이미지 업로드후 저장된 url 받아오기
      const urls = Promise.all(
        fileList?.map((file) => {
          const storageRef = ref(storage, `detailImages/${accounts[0]}`);
          uploadBytesResumable(storageRef, file);
          return getDownloadURL(storageRef);
        })
      );
      // 업로드된 이미지 링크 상태로 지정 (보통은 해당 링크를 데이터베이스(파이어스토어)에 저장)
      const getData = () => {
        console.log("check");
        urls.then((appData) => {
          setUrl(appData[0]);
        });
      };
      console.log("url: " + url);
      setInputDetail(url);
      console.log("input: " + inputDetail);
      getData();
      alert("성공적으로 업로드 되었습니다");
    } catch (err) {
      console.error(err);
    }

    const title = inputTitle;
    const lineInfo = inputLineInfo;
    const price = parseInt(inputPrice);
    const categori = inputCategori;
    const thumbnail = inputThumbnail;
    const detail = inputDetail;
    const expressDue = inputExpressDue;
    const info = inputInfo;

    console.log("전송시작");
    await contract.methods.registItem(title, lineInfo, price, categori, thumbnail, detail, expressDue, info).send({ from: accounts[0], gas: 4120400 });
    console.log("전송끝");
  };
  const handleChangeSelect = (e) => {
    setInputCategori(e.target.value);
    setSelected(e.target.value);
  };
  const options = [
    { value: "", text: "카테고리를 선택해주세요" },
    { value: "의류", text: "의류" },
    { value: "식료품", text: "식료품" },
    { value: "준비물", text: "준비물" },
  ];
  const [selected, setSelected] = useState(options[0].value);
  return (
    <form className="product_inputgroup">
      <label>상품명</label>
      <input placeholder="상품명을 입력해주세요" value={inputTitle} onChange={handleTitleChange} />
      <br />
      <label>한 줄 설명</label>
      <input placeholder="한 줄 설명을 입력해주세요" value={inputLineInfo} onChange={handleLineInfoChange} />
      <br />
      <label>상품 가격</label>
      <input placeholder="상품 가격을 입력해주세요" value={inputPrice} onChange={handlePriceChange} />
      <br />
      <label>카테고리</label>
      <select name="카테고리" id="" onChange={handleChangeSelect} value={selected}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <br />
      <label>썸네일 사진</label>
      <input
        id="file"
        type="file"
        onChange={(e) => {
          encodeFileToBase64(e.target.files[0]);
          setInputThumbnail(e.target.value);
          console.log(typeof e.target.value);
        }}
        value={inputThumbnail}
      />
      {imageSrc && <img src={imageSrc} alt="preview-img" className="thumbnail_img" />}
      <br />
      <label>상세 사진</label>
      <input type="file" multiple onChange={handleAddImages} value={inputDetail} />
      {showImages.map((image, id) => (
        <div key={id}>
          <img src={image} alt={`${image}-${id}`} className="thumbnail_img" />
        </div>
      ))}
      <br />
      <label>배송 기간</label>
      <input placeholder="배송 기간을 입력해주세요" value={inputExpressDue} onChange={handleExpressDueChange} />
      <br />
      <label>판매 단위</label>
      <input placeholder="판매 단위를 입력해주세요" />
      <br />
      <label>원산지</label>
      <input placeholder="원산지를 입력해주세요" />
      <br />
      <label className="product_summary">상품 설명</label>
      <textarea placeholder="상품 설명을 입력해주세요" value={inputInfo} onChange={handleInfoChange} />
      <br />
      <div className="button_position">
        <MKBtn onClick={registItem}>등록하기</MKBtn>
      </div>
      <div className="button_position">
        <MKBtn>수정하기</MKBtn>
      </div>
    </form>
  );
};

export default ProductForm;
