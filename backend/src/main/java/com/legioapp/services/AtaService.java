package com.legioapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.legioapp.domain.Ata;
import com.legioapp.repositories.AtaRepository;
import com.legioapp.services.exceptions.DataIntegrityException;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class AtaService {

	@Autowired
	private AtaRepository repo;
	
	public Ata find(Integer  id) {
		
		Optional<Ata> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Ata.class.getName()));
	}
	
	public Ata insert(Ata obj) {
		obj.setId(null);
		obj = repo.save(obj);
		return obj;
	}
	
	public Ata Update(Ata obj) {
		Ata newObj = find(obj.getId());
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
	
	public void UpdateData(Ata newObj, Ata obj) {
		newObj.setId(obj.getId());
		newObj.setDate(obj.getDate());
		newObj.setAttendance(obj.getAttendance());
		newObj.setEvent(obj.getEvent());
		newObj.setRecruitment(obj.getRecruitment());
		newObj.setRecruitment(obj.getRecruitment());
		newObj.setTreasury(obj.getTreasury());
		newObj.setWork(obj.getWork());
	}
	
	public List<Ata> findAll() {
		return repo.findAll();
	}
	
	public Ata findAllById(Integer id) {
		Optional<Ata> obj = repo.findById(id);
		try {
			return obj.orElseThrow(
					() -> new ObjectNotFoundException("Não localizado " + id + ", tipo" + Ata.class.getName()));
		} catch (ObjectNotFoundException e) {
			// TODO Auto-generated catch block
			return null;
		}
	}
}
