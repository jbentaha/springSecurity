package com.swifthorizon.hrmgt.user.repository;

import com.swifthorizon.hrmgt.user.entity.SHRUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SHRUserRepository extends JpaRepository<SHRUserEntity, Long> {

    Optional<SHRUserEntity> findByEmail(String email);

}