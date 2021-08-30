package com.legioapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legioapp.domain.Legios;

public interface LegiosRepository extends JpaRepository<Legios, Integer> {
}
