package com.legioapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Attendance;
import com.legioapp.domain.Legio;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance,Integer>{
	
	@Transactional(readOnly = true)
	@Query("SELECT obj FROM Attendance obj WHERE obj.date = :date ORDER BY obj.date ASC")
	public List<Attendance> findForDate(@Param("date")String date);
	
	@Transactional(readOnly = true)
	@Query("SELECT obj FROM Attendance obj WHERE obj.legio = :legio ORDER BY obj.date ASC")
	public List<Attendance> findForLegio(@Param("legio")Legio legio);
}
