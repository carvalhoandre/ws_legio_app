package com.legioapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Legio;
import com.legioapp.dto.LegioDTO;
import com.legioapp.repositories.LegiosRepository;
import com.legioapp.services.exceptions.DataIntegrityException;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class LegioService {

	@Autowired
	private LegiosRepository repo;
	
	public Legio find(Integer  id) {
		
		Optional<Legio> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Legio.class.getName()));
	}
	
	public Legio findByName(String name) {	
		Legio obj = repo.findByName(name);
		return obj;
	}
	
	@Transactional
	public Legio insert(Legio obj) {
		obj.setId(null);
		obj = repo.save(obj);
		return obj;
	}
	
	public Legio Update(Legio obj) {
		Legio newObj = find(obj.getId());
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
	
	public void UpdateData(Legio newObj, Legio obj) {
		newObj.setName(obj.getName());
		newObj.setBirthday(obj.getBirthday());
		newObj.setType(obj.getType());
		newObj.setAttendance(obj.getAttendance());
		newObj.setInitial(obj.getInitial());
	}
	
	public List<Legio> findAll() {
		return repo.findAll();
	}
	
	public Legio findAllById(Integer id) {
		Optional<Legio> obj = repo.findById(id);
		try {
			return obj.orElseThrow(
					() -> new ObjectNotFoundException("Não localizado " + id + ", tipo" + Legio.class.getName()));
		} catch (ObjectNotFoundException e) {
			// TODO Auto-generated catch block
			return null;
		}
	}
	
	public Legio fromDTO(LegioDTO objDto) {
		return new Legio(objDto.getId(), objDto.getName(), null, null, null);

	}
	
	public List<Legio> findForBirthday(String date) {
		List<Legio> obj = repo.findForBirthday(date);
		return obj;
	}
	
	public List<Legio> findBirthdayMonth(String mes) {
		String newObj = ("___"+mes);
		List<Legio> obj = repo.findBirthdayMonth(newObj);
		return obj;
	}
}
