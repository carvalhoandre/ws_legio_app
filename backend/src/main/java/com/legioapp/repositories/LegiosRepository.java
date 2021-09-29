package com.legioapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legioapp.domain.Legio;

public interface LegiosRepository extends JpaRepository<Legio, Integer> {
}
