package com.legioapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.AtaExtenso;

@Repository
public interface AtaExtensoRepository extends JpaRepository<AtaExtenso,Integer>{
	@Transactional(readOnly = true)
	@Query("SELECT obj FROM AtaExtenso obj WHERE obj.date = :date ORDER BY obj.date ASC")
	public List<AtaExtenso> findForDate(@Param("date")String date);
}
