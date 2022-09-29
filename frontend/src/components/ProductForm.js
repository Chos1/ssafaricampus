import { useState } from "react";
import "./ProductForm.css";
import MKBtn from "../components/ui/MKBtn";

const ProductForm = () => {
  const [imageSrc, setImageSrc] = useState("");
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

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  return (
    <form className="product_inputgroup">
      <label>상품명</label>
      <input placeholder="상품명을 입력해주세요" />
      <br />
      <label>한 줄 설명</label>
      <input placeholder="한 줄 설명을 입력해주세요" />
      <br />
      <label>상품 가격</label>
      <input placeholder="상품 가격을 입력해주세요" />
      <br />
      <label>카테고리</label>
      <select name="카테고리" id="">
        <option value="none">카테고리를 선택하세요</option>
        <option value="">의류</option>
        <option value="">식료품</option>
        <option value="">준비물</option>
      </select>
      <br />
      <label>썸네일 사진</label>
      <input
        id="file"
        type="file"
        onChange={(e) => {
          encodeFileToBase64(e.target.files[0]);
        }}
      />

      {imageSrc && <img src={imageSrc} alt="preview-img" className="thumbnail_img" />}

      <br />
      <label>상세 사진</label>
      <input type="file" multiple onChange={handleAddImages} />
      {showImages.map((image, id) => (
        <div key={id}>
          <img src={image} alt={`${image}-${id}`} className="thumbnail_img" />
        </div>
      ))}
      <br />
      <label>배송 기간</label>
      <input placeholder="배송 기간을 입력해주세요" />
      <br />
      <label>판매 단위</label>
      <input placeholder="판매 단위를 입력해주세요" />
      <br />
      <label>원산지</label>
      <input placeholder="원산지를 입력해주세요" />
      <br />
      <label className="product_summary">상품 설명</label>
      <textarea placeholder="상품 설명을 입력해주세요" />
      <br />

      <div className="button_position">
        <MKBtn>등록하기</MKBtn>
      </div>
      <div className="button_position">
        <MKBtn>수정하기</MKBtn>
      </div>
    </form>
  );
};

export default ProductForm;
