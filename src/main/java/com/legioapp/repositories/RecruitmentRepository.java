package com.legioapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legioapp.domain.Recruitment;

public interface RecruitmentRepository extends JpaRepository<Recruitment, Integer>{
}
