package com.legioapp.services;

import java.text.SimpleDateFormat;
import java.util.Date;
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
		Date myDate = new Date();
		SimpleDateFormat mdyFormat = new SimpleDateFormat("dd-MM-yyyy");
		String mdy = mdyFormat.format(myDate);
		obj.setDate(mdy);
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
		newObj.setAdult(obj.getAdult());
		newObj.setAta(obj.getAta());
		newObj.setChildren(obj.getChildren());
		newObj.setElderly(obj.getElderly());
		newObj.setHours(obj.getHours());
		newObj.setTotal(obj.getTotal());
		newObj.setWork(obj.getWork());
		newObj.setYong(obj.getYong());
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
	
	public List<Work> findAllByDate(String date) {
		List<Work> obj = repo.findForDate(date);
		return obj;
	}
}
