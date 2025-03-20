package com.example.Ecommerce.Exceptions;

public class UnauthenticatedUserException extends Exception{
    public UnauthenticatedUserException(String message) {
        super(message);
    }
}
