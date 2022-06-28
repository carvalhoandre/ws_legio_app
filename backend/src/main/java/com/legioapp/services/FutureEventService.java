package com.legioapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Event;
import com.legioapp.domain.FutureEvent;
import com.legioapp.domain.Legio;
import com.legioapp.repositories.FutureEventRepository;
import com.legioapp.services.exceptions.DataIntegrityException;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class FutureEventService {

	@Autowired
	private FutureEventRepository repo;
	
	public FutureEvent find(Integer  id) {
		
		Optional<FutureEvent> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Legio.class.getName()));
	}
	
	@Transactional
	public FutureEvent insert(FutureEvent obj) {
		obj.setId(null);
		obj = repo.save(obj);
		return obj;
	}
	
	public FutureEvent Update(FutureEvent obj) {
		FutureEvent newObj = find(obj.getId());
		UpdateData(newObj, obj);
		return repo.save(newObj);
	}
	
	public void delete(Integer id) {
		find(id);
		try {
			repo.deleteById(id);
		} catch(DataIntegrityViolationException e) {
			throw new DataIntegrityException("Não é possível excluir um Evento que possua pendencias");
		}
	}
	
	public void UpdateData(FutureEvent newObj, FutureEvent obj) {
		newObj.setName(obj.getName());
		newObj.setDateEvent(obj.getDateEvent());
	}
	
	public List<FutureEvent> findAll() {
		return repo.findAll();
	}
	
	public FutureEvent findAllById(Integer id) {
		Optional<FutureEvent> obj = repo.findById(id);
		try {
			return obj.orElseThrow(
					() -> new ObjectNotFoundException("Não localizado " + id + ", tipo" + Event.class.getName()));
		} catch (ObjectNotFoundException e) {
			// TODO Auto-generated catch block
			return null;
		}
	}
	
	public List<FutureEvent> findFutureEventByMonth(String mes) {
		String newObj = ("___"+mes);
		List<FutureEvent> obj = repo.findFutureEventByMonth(newObj);
		return obj;
	}
}
