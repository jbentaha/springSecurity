package com.swifthorizon.hrmgt.exception;
import jakarta.servlet.ServletException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.naming.AuthenticationException;

@RestControllerAdvice
@Slf4j
public class SHRExceptionHandler {

    private static final String ERR_MSG_USER_DISABLED = "User is disabled";

    private static final String ERR_MSG_USER_INCORRECT = "Incorrect username or password";

    private static final String ERR_MSG_EMAIL_SEND = "Cannot send email";

    @ExceptionHandler({BadCredentialsException.class, AuthenticationException.class, UsernameNotFoundException.class})
    public ResponseEntity<String> handleIncorrectUserCredentials() {

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ERR_MSG_USER_INCORRECT);
    }

    @ExceptionHandler(DisabledException.class)
    public ResponseEntity<String> handleDisabledException() {
        return ResponseEntity.status(HttpStatus.LOCKED).body(ERR_MSG_USER_DISABLED);
    }

}
