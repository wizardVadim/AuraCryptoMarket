package com.wizardVadim.AuraCryptoMarket.repository;

import com.wizardVadim.AuraCryptoMarket.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}