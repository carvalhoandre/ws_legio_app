package com.legioapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Work;
import com.legioapp.repositories.WorkRepository;
import com.legioapp.services.exceptions.DataIntegrityException;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class WorkService {
	
	@Autowired
	private WorkRepository repo;
	
	public Work find(Integer  id) {
		
		Optional<Work> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Work.class.getName()));
	}
	
	@Transactional
	public Work insert(Work obj) {
		obj.setId(null);
		obj = repo.save(obj);
		return obj;
	}
	
	public Work Update(Work obj) {
		Work newObj = find(obj.getId());
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
	
	public void UpdateData(Work newObj, Work obj) {
		newObj.setAta(obj.getAta());
		newObj.setPerson(obj.getPerson());
		newObj.setHours(obj.getHours());
		newObj.setLegios(obj.getLegios());
		newObj.setAdult(obj.getAdult());
		newObj.setElderly(obj.getElderly());
		newObj.setChildren(obj.getChildren());
		
	}
	
	public List<Work> findAll() {
		return repo.findAll();
	}
	
	public Work findAllById(Integer id) {
		Optional<Work> obj = repo.findById(id);
		try {
			return obj.orElseThrow(
					() -> new ObjectNotFoundException("Não localizado " + id + ", tipo" + Work.class.getName()));
		} catch (ObjectNotFoundException e) {
			// TODO Auto-generated catch block
			return null;
		}
	}
}
