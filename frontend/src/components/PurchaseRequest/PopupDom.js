// import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import style from './PopupDom.module.css';

const PopupDom = (props) => {

    const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        } 

        props.setcompany({
            ...props.company,
            address:fullAddress,
        })
        props.popup = false
    }

    return (
      <DaumPostcode
          className={style.postmodal}
          autoClose
          onComplete={complete} />
    );
};

export default PopupDom;