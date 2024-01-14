package com.swifthorizon.hrmgt.exception;

public class SHREntityNotFoundException extends RuntimeException {

    private static final String EXCEPTION_ENTITY_NOT_FOUND = "No %s was found for the Id %s";

    private Long id;

    private String message;

    public SHREntityNotFoundException(Class<?> entityClass, Long id) {
        super(String.format(EXCEPTION_ENTITY_NOT_FOUND, entityClass.getSimpleName(), id));
        this.id = id;
    }

    public SHREntityNotFoundException(String message) {
        super(message);
    }

    public Long getId() {
        return id;
    }

    @Override
    public String getMessage() {
        return message;
    }

}
