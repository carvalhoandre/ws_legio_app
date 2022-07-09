package com.legioapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Ata;

@Repository
public interface AtaRepository extends JpaRepository<Ata,Integer>{
	@Transactional(readOnly = true)
	@Query("SELECT obj FROM Ata obj WHERE obj.date = :date ORDER BY obj.date ASC")
	public List<Ata> findForDate(@Param("date")String date);
}
