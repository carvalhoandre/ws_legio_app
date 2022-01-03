package com.legioapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Recruitment;

public interface RecruitmentRepository extends JpaRepository<Recruitment, Integer>{
	
	@Transactional(readOnly = true)
	@Query("SELECT obj FROM Recruitment obj WHERE obj.date = :date ORDER BY obj.date ASC")
	public List<Recruitment> findForDate(@Param("date")String date);
}
