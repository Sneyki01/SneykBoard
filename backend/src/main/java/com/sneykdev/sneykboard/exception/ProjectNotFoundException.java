package com.sneykdev.sneykboard.exception;


public class ProjectNotFoundException extends RuntimeException {

    public ProjectNotFoundException(Long id) {
        super("project with id " + id + " was not found.");
    }
}
