package com.blockchain.cap.api.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@ApiModel("기본 응답값 형태")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BaseResponseBody {

    @ApiModelProperty(name="응답 메시지")
    String message=null;
    @ApiModelProperty(name="응답 코드")
    Integer statueCode=null;

    public BaseResponseBody(Integer statueCode) {
        this.statueCode = statueCode;
    }

    public static BaseResponseBody of(Integer statusCode, String message) {
        BaseResponseBody body=new BaseResponseBody();
        body.setStatueCode(statusCode);
        body.setMessage(message);
        return body;
    }

}
