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
	
	@PostMapping("/update")
	public ResponseEntity<Void> update(@Valid @RequestBody AtaExtenso obj) {
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
	public ResponseEntity<AtaExtenso> findById(@PathVariable Integer id){
		AtaExtenso obj = service.findAllById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping
	public ResponseEntity<List<AtaExtenso>> findAll(){
		List<AtaExtenso> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/date/{date}")
	public ResponseEntity<List<AtaExtenso>> findById(@PathVariable String date){
		List<AtaExtenso> list = service.findAllByDate(date);
		return ResponseEntity.ok(list);
	}
	
	@PostMapping("/sendEmail")
	public ResponseEntity<Void> sendByEmail(@Valid @RequestBody AtaExtenso obj) {
		obj = service.sendAtaExtensoForEmail(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
}
