package com.blockchain.cap.api.controller;

import com.blockchain.cap.api.request.AuthLoginPostReq;
import com.blockchain.cap.api.request.UserRegisterPostReq;
import com.blockchain.cap.api.response.BaseResponseBody;
import com.blockchain.cap.api.service.UserService;
import io.swagger.annotations.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;
import java.util.Optional;

/**
 *  회원 관련 API 요청 처리를 위한 컨트롤러 정의
 */

@Api(value = "유저 API", tags = {"User"})
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    UserService userService;

    @ApiOperation(value="유저 회원가입", notes="유저로 회원가입 한다")
    @ApiResponses({
            @ApiResponse(code=200, message="성공", response= AuthLoginPostReq.class),
            @ApiResponse(code=401, message="가입 실패", response= BaseResponseBody.class),
            @ApiResponse(code=500, message="서버오류", response=BaseResponseBody.class)
    })
    @PostMapping("register/user")
    public ResponseEntity<? extends BaseResponseBody> register(
            @RequestBody @ApiParam(value = "회원가입 정보", required = true) UserRegisterPostReq registerInfo) {
        // service 에서 DB 에 회원정보 등록하기 전에 validation 체크 필요

        if(userService.createUser(registerInfo)) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(401).body(BaseResponseBody.of(401, "Failure"));
    }


}
