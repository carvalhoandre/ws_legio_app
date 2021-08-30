package com.legioapp.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.legioapp.domain.Work;
import com.legioapp.services.WorkService;

@RestController
@RequestMapping(value="/works")
public class WorkResource {
	
	@Autowired
	private WorkService service;
	
	@RequestMapping(value="/{id}", method = RequestMethod.GET)
	public ResponseEntity<Work> find(@PathVariable Integer id) {
		Work obj = service.find(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public String list() {
		return "REST está funcionando";
	}
	
}
