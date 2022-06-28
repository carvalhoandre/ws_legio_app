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

import com.legioapp.domain.Recruitment;
import com.legioapp.services.RecruitmentService;

@RestController
@RequestMapping(value="/recruitment")
public class RecruitmentResource {

	@Autowired
	private RecruitmentService service;
	
	
	@PostMapping
	public ResponseEntity<Void> insert(@Valid @RequestBody Recruitment obj) {
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PostMapping("/update")
	public ResponseEntity<Void> update(@Valid @RequestBody Recruitment obj) {
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
	public ResponseEntity<Recruitment> findById(@PathVariable Integer id){
		Recruitment obj = service.findAllById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping
	public ResponseEntity<List<Recruitment>> findAll(){
		List<Recruitment> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/date/{date}")
	public ResponseEntity<List<Recruitment>> findById(@PathVariable String date){
		List<Recruitment> list = service.findAllByDate(date);
		return ResponseEntity.ok(list);
	}
}
