package com.legioapp.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Event;
import com.legioapp.domain.Legio;
import com.legioapp.repositories.EventRepository;
import com.legioapp.services.exceptions.DataIntegrityException;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class EventService {

	@Autowired
	private EventRepository repo;
	
	public Event find(Integer  id) {
		
		Optional<Event> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Legio.class.getName()));
	}
	
	@Transactional
	public Event insert(Event obj) {
		Date myDate = new Date();
		SimpleDateFormat mdyFormat = new SimpleDateFormat("dd-MM-yyyy");
		String mdy = mdyFormat.format(myDate);
		obj.setDate(mdy);
		obj.setId(null);
		obj = repo.save(obj);
		return obj;
	}
	
	public Event Update(Event obj) {
		Event newObj = find(obj.getId());
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
	
	public void UpdateData(Event newObj, Event obj) {
		newObj.setName(obj.getName());
		newObj.setAtivos(obj.getAtivos());
		newObj.setAuxiliares(obj.getAuxiliares());
		newObj.setGuests(obj.getGuests());
		newObj.setDateEvent(obj.getDateEvent());
	}
	
	public List<Event> findAll() {
		return repo.findAll();
	}
	
	public Event findAllById(Integer id) {
		Optional<Event> obj = repo.findById(id);
		try {
			return obj.orElseThrow(
					() -> new ObjectNotFoundException("Não localizado " + id + ", tipo" + Event.class.getName()));
		} catch (ObjectNotFoundException e) {
			// TODO Auto-generated catch block
			return null;
		}
	}
	
	public List<Event> findAllByDate(String date) {
		List<Event> obj = repo.findForDate(date);
		return obj;
	}
}
