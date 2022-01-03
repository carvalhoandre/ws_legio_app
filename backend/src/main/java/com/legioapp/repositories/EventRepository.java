package com.legioapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Event;

public interface EventRepository extends JpaRepository<Event, Integer >{
	
	@Transactional(readOnly = true)
	@Query("SELECT obj FROM Event obj WHERE obj.date = :date ORDER BY obj.date ASC")
	public List<Event> findForDate(@Param("date")String date);
}
