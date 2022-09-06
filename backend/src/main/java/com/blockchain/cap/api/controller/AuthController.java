package com.blockchain.cap.api.controller;

import com.blockchain.cap.api.request.AuthLoginPostReq;
import com.blockchain.cap.api.response.AuthLoginPostRes;
import com.blockchain.cap.api.response.BaseResponseBody;
import com.blockchain.cap.api.service.UserService;
import io.swagger.annotations.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

/**
 *  인증 관련 API 요청 처리를 위한 컨트롤러 정의
 */

@Api(value = "인증 API", tags = {"Auth"})
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    UserService userService;
    PasswordEncoder passwordEncoder;

    @ApiOperation(value="로그인", notes="아이디와 패스워드를 통해 로그인")
    @ApiResponses({
            @ApiResponse(code=200, message="성공", response=AuthLoginPostReq.class),
            @ApiResponse(code=401, message="인증 실패", response= BaseResponseBody.class),
            @ApiResponse(code=404, message="사용자 없음", response=BaseResponseBody.class),
            @ApiResponse(code=500, message="서버오류", response=BaseResponseBody.class)
    })
    @PostMapping("/login")
    public ResponseEntity<AuthLoginPostRes> login(HttpServletResponse response, @RequestBody @ApiParam(value="로그인 정보", required=true) AuthLoginPostReq loginInfo) {
        return ResponseEntity.status(404).body(AuthLoginPostRes.of(404, "Not Exist", null));
    }

}
