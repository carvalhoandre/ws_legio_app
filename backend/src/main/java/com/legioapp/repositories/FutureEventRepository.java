package com.legioapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.FutureEvent;

public interface FutureEventRepository extends JpaRepository<FutureEvent, Integer >{
	
	@Transactional(readOnly = true)
	@Query("SELECT obj FROM FutureEvent obj WHERE obj.dateEvent LIKE :month")
	public List<FutureEvent> findFutureEventByMonth(@Param("month")String month);
}
