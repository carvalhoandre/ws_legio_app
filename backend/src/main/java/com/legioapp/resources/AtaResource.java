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

import com.legioapp.domain.Ata;
import com.legioapp.domain.AtaExtenso;
import com.legioapp.services.AtaService;
import com.legioapp.services.EmailService;

@RestController
@RequestMapping("/ata")
public class AtaResource {

	@Autowired
	private AtaService service;
	
	@Autowired
	private EmailService emailService;
	
	@PostMapping
	public ResponseEntity<Void> insert(@Valid @RequestBody Ata obj, @Valid @RequestBody AtaExtenso ata) {
		obj = service.insert(obj);
		emailService.sendOrderConfirmationHtmlEmail(ata);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) {
		service.delete(id);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Ata> findById(@PathVariable Integer id){
		Ata obj = service.findAllById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping
	public ResponseEntity<List<Ata>> findAll(){
		List<Ata> list = service.findAll();
		return ResponseEntity.ok(list);
	}
}
