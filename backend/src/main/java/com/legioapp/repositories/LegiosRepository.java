package com.legioapp.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Legio;

public interface LegiosRepository extends JpaRepository<Legio, Integer> {
	
	@Transactional(readOnly=true)
	Legio findByName(String name);
	
	@Transactional(readOnly = true)
	@Query("SELECT obj FROM Legio obj WHERE month(:date) = month(obj.birthday)")
	public List<Legio> findForBirthday(@Param("date")Date date);
}
