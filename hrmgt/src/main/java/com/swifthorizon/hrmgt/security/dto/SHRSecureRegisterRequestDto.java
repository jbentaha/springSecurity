package com.swifthorizon.hrmgt.security.dto;

import com.swifthorizon.hrmgt.enums.SHRUserRoleEnum;

public record SHRSecureRegisterRequestDto(String firstName, String lastName, String email, String password, SHRUserRoleEnum role
) { }
