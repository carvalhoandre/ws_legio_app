package com.legioapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legioapp.domain.Work;

public interface WorkRepository extends JpaRepository<Work, Integer> {
}
