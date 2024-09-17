package com.wizardVadim.AuraCryptoMarket.controller.api;

import com.wizardVadim.AuraCryptoMarket.dto.LoginRequest;
import com.wizardVadim.AuraCryptoMarket.dto.LoginResponse;
import com.wizardVadim.AuraCryptoMarket.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class LoginController {

    private final AuthenticationService authenticationService;

    public LoginController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        String token = authenticationService.authenticate(loginRequest);
        return ResponseEntity.ok(new LoginResponse("Success", token));
    }

}
