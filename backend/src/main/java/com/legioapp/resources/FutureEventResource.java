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

import com.legioapp.domain.FutureEvent;
import com.legioapp.services.FutureEventService;

@RestController
@RequestMapping(value="/futureEvent")
public class FutureEventResource {

	@Autowired
	private FutureEventService service;
	
	
	@PostMapping
	public ResponseEntity<Void> insert(@Valid @RequestBody FutureEvent obj) {
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PostMapping("/update")
	public ResponseEntity<Void> update(@Valid @RequestBody FutureEvent obj) {
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
	public ResponseEntity<FutureEvent> findById(@PathVariable Integer id){
		FutureEvent obj = service.findAllById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping
	public ResponseEntity<List<FutureEvent>> findAll(){
		List<FutureEvent> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/month/{mes}")
	public ResponseEntity<List<FutureEvent>> findFutureEventByMonth(@PathVariable String mes){
		List<FutureEvent> list = service.findFutureEventByMonth(mes);
		return ResponseEntity.ok(list);
	}
}
