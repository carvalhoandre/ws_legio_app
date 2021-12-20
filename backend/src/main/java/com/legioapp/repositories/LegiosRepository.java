package com.legioapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Legio;

public interface LegiosRepository extends JpaRepository<Legio, Integer> {
	
	@Transactional(readOnly=true)
	Legio findByName(String name);
}
