package com.legioapp.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
				"Objeto não encontrado! Id: " + id + ", Tipo: " + AtaExtenso.class.getName()));
	}
	
	public AtaExtenso insert(AtaExtenso obj) {
		obj.setId(null);
		Date myDate = new Date();
		SimpleDateFormat mdyFormat = new SimpleDateFormat("dd-MM-yyyy");
		String mdy = mdyFormat.format(myDate);
		obj.setDate(mdy);
		obj = repo.save(obj);
		return obj;
	}
	
	public void delete(Integer id) {
		find(id);
		try {
			repo.deleteById(id);
		} catch(DataIntegrityViolationException e) {
			throw new DataIntegrityException("Não é possível excluir um Ata que possui pendencias");
		}
	}
	
	public AtaExtenso Update(AtaExtenso obj) {
		AtaExtenso newObj = find(obj.getId());
		UpdateData(newObj, obj);
		return repo.save(newObj);
	}
	
	public void UpdateData(AtaExtenso newObj, AtaExtenso obj) {
		newObj.setInicio(obj.getInicio());
		newObj.setAta(obj.getAta());
		newObj.setParticipation(obj.getParticipation());
		newObj.setCapituloEspiritual(obj.getCapituloEspiritual());
		newObj.setPaginaEspiritual(obj.getPaginaEspiritual());
		newObj.setTitleEspiritual(obj.getTitleEspiritual());
		newObj.setAllocutionAutor(obj.getAllocutionAutor());
		newObj.setAllocutionAssunto(obj.getAllocutionAssunto());
		newObj.setColeta(obj.getColeta());
		newObj.setPaginaEstudo(obj.getPaginaEstudo());
		newObj.setParagrafoEstudo(obj.getParagrafoEstudo());
		newObj.setAssuntos(obj.getAssuntos());
		newObj.setHoraFinal(obj.getHoraFinal());
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
	
	public List<AtaExtenso> findAllByDate(String date) {
		List<AtaExtenso> obj = repo.findForDate(date);
		return obj;
	}
	
	@Transactional
	public AtaExtenso sendAtaExtensoForEmail(AtaExtenso obj) {
		emailService.sendOrderConfirmationHtmlEmail(obj);
		return obj;
	}
}
