package com.swifthorizon.hrmgt.security.controller;

import com.swifthorizon.hrmgt.security.dto.SHRSecureAuthenticationRequestDto;
import com.swifthorizon.hrmgt.security.dto.SHRSecureAuthenticationResponseDto;
import com.swifthorizon.hrmgt.security.dto.SHRSecureRegisterRequestDto;
import com.swifthorizon.hrmgt.security.service.SHRSecureAuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class SHRSecureAuthenticationController {

    private final SHRSecureAuthenticationService authenticationService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void register(@RequestBody SHRSecureRegisterRequestDto request){
        authenticationService.register(request);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<SHRSecureAuthenticationResponseDto> register(@RequestBody SHRSecureAuthenticationRequestDto request){

        SHRSecureAuthenticationResponseDto response = authenticationService.authenticate(request);

        return ResponseEntity.ok(response);
    }

}
