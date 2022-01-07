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

import com.legioapp.domain.Legio;
import com.legioapp.services.LegioService;

@RestController
@RequestMapping(value="/legio")
public class LegioResource {

	@Autowired
	private LegioService service;
	
	
	@PostMapping
	public ResponseEntity<Void> insert(@Valid @RequestBody Legio obj) {
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PostMapping("/update")
	public ResponseEntity<Void> update(@Valid @RequestBody Legio obj) {
		obj = service.Update(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) {
		service.delete(id);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Legio> findById(@PathVariable Integer id){
		Legio obj = service.findAllById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping
	public ResponseEntity<List<Legio>> findAll(){
		List<Legio> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/birthday/{date}")
	public ResponseEntity<List<Legio>> findBirthday(@PathVariable String date){
		List<Legio> list = service.findForBirthday(date);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/month/{mes}")
	public ResponseEntity<List<Legio>> findBirthMonth(@PathVariable String mes){
		List<Legio> list = service.findBirthdayMonth(mes);
		return ResponseEntity.ok(list);
	}
}
