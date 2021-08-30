package com.legioapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legioapp.domain.Treasury;

public interface TreasuryRepository extends JpaRepository<Treasury, Integer>{
}
