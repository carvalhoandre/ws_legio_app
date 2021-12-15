package com.legioapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.legioapp.domain.Ata;
import com.legioapp.domain.AtaExtenso;
import com.legioapp.repositories.AtaExtensoRepository;
import com.legioapp.services.exceptions.DataIntegrityException;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class AtaExtensoService {

	@Autowired
	private AtaExtensoRepository repo;
	
	@Autowired
	private EmailService emailService;
	
	public AtaExtenso find(Integer  id) {
		
		Optional<AtaExtenso> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Ata.class.getName()));
	}
	
	public AtaExtenso insert(AtaExtenso obj) {
		obj.setId(null);
		emailService.sendOrderConfirmationHtmlEmail(obj);
		obj = repo.save(obj);
		return obj;
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
	
	public List<AtaExtenso> findAll() {
		return repo.findAll();
	}
	
	public AtaExtenso findAllById(Integer id) {
		Optional<AtaExtenso> obj = repo.findById(id);
		try {
			return obj.orElseThrow(
					() -> new ObjectNotFoundException("Não localizado " + id + ", tipo" + AtaExtenso.class.getName()));
		} catch (ObjectNotFoundException e) {
			// TODO Auto-generated catch block
			return null;
		}
	}
}
