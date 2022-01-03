package com.legioapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Work;

public interface WorkRepository extends JpaRepository<Work, Integer> {
	
	@Transactional(readOnly = true)
	@Query("SELECT obj FROM Work obj WHERE obj.date = :date ORDER BY obj.date ASC")
	public List<Work> findForDate(@Param("date")String date);
}
