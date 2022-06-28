package com.legioapp.resources;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.legioapp.domain.Work;
import com.legioapp.dto.WorkDTO;
import com.legioapp.services.WorkService;

@RestController
@RequestMapping(value="/work")
public class WorkResource {
	
	@Autowired
	private WorkService service;
	
	@PostMapping
	public ResponseEntity<Void> insert(@Valid @RequestBody Work obj) {
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PostMapping("/update")
	public ResponseEntity<Void> update(@Valid @RequestBody Work obj) {
		obj = service.Update(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Work> findById(@PathVariable Integer id){
		Work obj = service.findAllById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping
	public ResponseEntity<List<Work>> findAll(){
		List<Work> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/date/{date}")
	public ResponseEntity<List<Work>> findById(@PathVariable String date){
		List<Work> list = service.findAllByDate(date);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/worktype/{workType}")
	public ResponseEntity<WorkDTO> findByWorkType(@PathVariable Integer workType){
		WorkDTO obj = service.findAllByWorkType(workType);
		return ResponseEntity.ok(obj);
	}
}
