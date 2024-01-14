package com.swifthorizon.hrmgt;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/demo")
public class SHRHomeController {

    @GetMapping("/employee_only")
    @PreAuthorize("hasAuthority(T(com.swifthorizon.hrmgt.enums.SHRSecureUserRoleEnum).EMPLOYEE)")
    public ResponseEntity<String> homeController() {
        return ResponseEntity.ok("Hello Employee");
    }

    @GetMapping("/hr_only")
    @PreAuthorize("hasAuthority(T(com.swifthorizon.hrmgt.enums.SHRSecureUserRoleEnum).HR)")
    public ResponseEntity<String> homeHrController() {
        return ResponseEntity.ok("Hello HR");
    }

}
