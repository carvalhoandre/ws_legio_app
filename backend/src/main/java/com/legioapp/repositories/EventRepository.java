package com.legioapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legioapp.domain.Event;

public interface EventRepository extends JpaRepository<Event, Integer >{
}
