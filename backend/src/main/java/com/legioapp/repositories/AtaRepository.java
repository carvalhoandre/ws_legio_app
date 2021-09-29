package com.legioapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.legioapp.domain.Ata;

@Repository
public interface AtaRepository extends JpaRepository<Ata,Integer>{
}
