package com.wizardVadim.AuraCryptoMarket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class AuraCryptoMarketApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuraCryptoMarketApplication.class, args);
	}


	@GetMapping("/login")
	public String auth() {
		return "login";
	}

}
