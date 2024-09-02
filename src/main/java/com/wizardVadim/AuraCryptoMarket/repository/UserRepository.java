package com.wizardVadim.AuraCryptoMarket.repository;

import com.wizardVadim.AuraCryptoMarket.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    @Query(value = "SELECT nextval(pg_get_serial_sequence('users', 'id'))", nativeQuery = true)
    Long getNextId();
}
