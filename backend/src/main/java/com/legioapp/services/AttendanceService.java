package com.legioapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Attendance;
import com.legioapp.domain.Legio;
import com.legioapp.repositories.AttendanceRepository;
import com.legioapp.services.exceptions.DataIntegrityException;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class AttendanceService {

	@Autowired
	private AttendanceRepository repo;
	
	@Autowired
	private LegioService legioService; 
	
	public Attendance find(Integer  id) {
		
		Optional<Attendance> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Legio.class.getName()));
	}
	
	@Transactional
	public Attendance insert(Attendance obj) {
		obj.setId(null);
		obj.setLegio(legioService.find(obj.getLegio().getId()));
		obj = repo.save(obj);
		return obj;
	}
	
	@Transactional
	public Attendance[] insertForId(Attendance[] obj) {
		for(Attendance newobj : obj) {
			newobj.setId(null);
			newobj.setLegio(legioService.find(newobj.getLegio().getId()));
			newobj = repo.save(newobj);
		}
		return obj;
	}
	
	public Attendance Update(Attendance obj) {
		Attendance newObj = find(obj.getId());
		UpdateData(newObj, obj);
		return repo.save(newObj);
	}
	
	public void delete(Integer id) {
		find(id);
		try {
			repo.deleteById(id);
		} catch(DataIntegrityViolationException e) {
			throw new DataIntegrityException("Não é possível excluir um Legionário que possui pedidos pendentes");
		}
	}
	
	public void UpdateData(Attendance newObj, Attendance obj) {
		newObj.setAta(obj.getAta());
		newObj.setDate(obj.getDate());
		newObj.setLegio(obj.getLegio());
		newObj.setAttendance(obj.getAttendance());
	}
	
	public List<Attendance> findAll() {
		return repo.findAll();
	}
	
	public Attendance findAllById(Integer id) {
		Optional<Attendance> obj = repo.findById(id);
		try {
			return obj.orElseThrow(
					() -> new ObjectNotFoundException("Não localizado " + id + ", tipo" + Legio.class.getName()));
		} catch (ObjectNotFoundException e) {
			// TODO Auto-generated catch block
			return null;
		}
	}
}
