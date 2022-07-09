package com.legioapp.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	@RequestMapping(value="/{email}", method = RequestMethod.POST)
	public ResponseEntity<Void> insert(@Valid @RequestBody AtaExtenso obj, @PathVariable String email) {
		obj = service.sendAtaExtensoForEmail(obj, email);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getNumber()).toUri();
		return ResponseEntity.created(uri).build();
	}
}
