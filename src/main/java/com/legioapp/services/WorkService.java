package com.legioapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.legioapp.domain.Work;
import com.legioapp.repositories.WorkRepository;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class WorkService {
	
	@Autowired
	private WorkRepository repo;
	
	public Work find(Integer id) {
		Optional<Work> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Work.class.getName()));
	}
	
	public List<Work> findAll() {
		return repo.findAll();
	}
	
	public Page<Work> findPage(Integer page, Integer linesPerPage, String orderBy, String direction){
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction),orderBy);
		return repo.findAll(pageRequest);
	}
	
}
