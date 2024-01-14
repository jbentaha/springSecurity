package com.swifthorizon.hrmgt.exception;

import javax.security.sasl.AuthenticationException;

public class SHRUserDisabledException extends AuthenticationException {

    public SHRUserDisabledException(String msg) {
        super(msg);
    }

}
