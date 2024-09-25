package com.wizardVadim.AuraCryptoMarket.service;

import com.wizardVadim.AuraCryptoMarket.dto.LoginRequest;
import com.wizardVadim.AuraCryptoMarket.security.JwtTokenProvider;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private final JwtTokenProvider jwtTokenProvider;

    public AuthenticationServiceImpl(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public String authenticate(LoginRequest loginRequest) {
        jwtTokenProvider.createToken(loginRequest.getUsername());
        return "generated-token";
    }
}
