package com.legioapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.legioapp.domain.Attendance;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance,Integer>{
}
