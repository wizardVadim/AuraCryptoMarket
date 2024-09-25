package com.wizardVadim.AuraCryptoMarket.service;

import com.wizardVadim.AuraCryptoMarket.dto.LoginRequest;

public interface AuthenticationService {
    String authenticate(LoginRequest loginRequest);
}
