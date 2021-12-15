package com.legioapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.legioapp.domain.Ata;
import com.legioapp.domain.AtaExtenso;
import com.legioapp.repositories.AtaRepository;
import com.legioapp.services.exceptions.DataIntegrityException;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class AtaService {

	@Autowired
	private AtaRepository repo;
	
	@Autowired
	private EmailService emailService;
	
	public Ata find(Integer  id) {
		
		Optional<Ata> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Ata.class.getName()));
	}
	
	public Ata insert(Ata obj, AtaExtenso ata) {
		obj.setId(null);
		emailService.sendOrderConfirmationHtmlEmail(ata);
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
		newObj.setEventos(obj.getEventos());
		newObj.setLegionarios(obj.getLegionarios());
		newObj.setRecrutamentos(obj.getRecrutamentos());
		newObj.setTesouraria(obj.getTesouraria());
		newObj.setTrabalhos(obj.getTrabalhos());
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
