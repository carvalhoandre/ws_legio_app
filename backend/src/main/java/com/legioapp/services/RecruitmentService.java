package com.legioapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Recruitment;
import com.legioapp.repositories.RecruitmentRepository;
import com.legioapp.services.exceptions.DataIntegrityException;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class RecruitmentService {

	@Autowired
	private RecruitmentRepository repo;
	
	public Recruitment find(Integer  id) {
		
		Optional<Recruitment> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Recruitment.class.getName()));
	}
	
	@Transactional
	public Recruitment insert(Recruitment obj) {
		obj.setId(null);
		obj = repo.save(obj);
		return obj;
	}
	
	public Recruitment Update(Recruitment obj) {
		Recruitment newObj = find(obj.getId());
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
	
	public void UpdateData(Recruitment newObj, Recruitment obj) {
		newObj.setAta(obj.getAta());
		newObj.setPerson(obj.getPerson());
		newObj.setQuantity(obj.getQuantity());
	}
	
	public List<Recruitment> findAll() {
		return repo.findAll();
	}
	
	public Recruitment findAllById(Integer id) {
		Optional<Recruitment> obj = repo.findById(id);
		try {
			return obj.orElseThrow(
					() -> new ObjectNotFoundException("Não localizado " + id + ", tipo" + Recruitment.class.getName()));
		} catch (ObjectNotFoundException e) {
			// TODO Auto-generated catch block
			return null;
		}
	}
}
