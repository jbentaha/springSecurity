package com.swifthorizon.hrmgt.security.service;

import com.swifthorizon.hrmgt.user.entity.SHRUserEntity;
import com.swifthorizon.hrmgt.user.repository.SHRUserRepository;
import com.swifthorizon.hrmgt.security.dto.SHRSecureAuthenticationRequestDto;
import com.swifthorizon.hrmgt.security.dto.SHRSecureAuthenticationResponseDto;
import com.swifthorizon.hrmgt.security.dto.SHRSecureRegisterRequestDto;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SHRSecureAuthenticationService {

    private final SHRUserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final SHRSecureJwtService jwtService;

    private final AuthenticationManager authenticationManager;

    public SHRSecureAuthenticationResponseDto authenticate(SHRSecureAuthenticationRequestDto request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.email(),
                request.password()
        ));

        var user = userRepository.findByEmail(request.email())
                .orElseThrow();

        var jwtToken = jwtService.generateToken(user);
        return SHRSecureAuthenticationResponseDto.builder().token(jwtToken).build();
    }

    @Transactional
    public void register(SHRSecureRegisterRequestDto request) {
        var user = SHRUserEntity.builder()
                .firstName(request.firstName())
                .lastName(request.lastName())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .role(request.role())
                .build();

        userRepository.save(user);
    }

}
