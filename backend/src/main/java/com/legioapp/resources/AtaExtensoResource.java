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

import com.legioapp.domain.AtaExtenso;
import com.legioapp.services.AtaExtensoService;

@RestController
@RequestMapping("/ataExtenso")
public class AtaExtensoResource {

	@Autowired
	private AtaExtensoService service;
	
	@PostMapping
	public ResponseEntity<Void> insert(@Valid @RequestBody AtaExtenso obj) {
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) {
		service.delete(id);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<AtaExtenso> findById(@PathVariable Integer id){
		AtaExtenso obj = service.findAllById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping
	public ResponseEntity<List<AtaExtenso>> findAll(){
		List<AtaExtenso> list = service.findAll();
		return ResponseEntity.ok(list);
	}
}
