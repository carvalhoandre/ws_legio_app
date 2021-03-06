package com.legioapp.resources;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.legioapp.domain.Attendance;
import com.legioapp.dto.AttendanceDTO;
import com.legioapp.services.AttendanceService;

@RestController
@RequestMapping(value="/attendance")
public class AttendanceResource {

	@Autowired
	private AttendanceService service;
	
	
	@PostMapping
	public ResponseEntity<Void> insert(@Valid @RequestBody Attendance obj) {
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PostMapping("/all")
	public ResponseEntity<Void> insert(@RequestBody Attendance[] obj, ModelMap map) {
		obj = service.insertForId(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.length).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PostMapping("/update")
	public ResponseEntity<Void> update(@Valid @RequestBody Attendance obj) {
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
	public ResponseEntity<Attendance> findById(@PathVariable Integer id){
		Attendance obj = service.findAllById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping
	public ResponseEntity<List<Attendance>> findAll(){
		List<Attendance> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping("/date/{date}")
	public ResponseEntity<List<Attendance>> findById(@PathVariable String date){
		List<Attendance> list = service.findAllByDate(date);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/legio/{id}")
	public ResponseEntity<AttendanceDTO> findByLegio(@PathVariable Integer id){
		AttendanceDTO attendance = service.findAllByLegio(id);
		return ResponseEntity.ok(attendance);
	}
}
