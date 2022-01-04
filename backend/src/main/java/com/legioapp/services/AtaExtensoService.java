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
		obj = repo.save(obj);
		emailService.sendOrderConfirmationHtmlEmail(obj);
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
		emailService.sendOrderConfirmationHtmlEmail(newObj);
		return repo.save(newObj);
	}
	
	public void UpdateData(AtaExtenso newObj, AtaExtenso obj) {
		newObj.setPresentes(obj.getPresentes());
		newObj.setAllocutionAssunto(obj.getAllocutionAssunto());
		newObj.setAllocutionAutor(obj.getAllocutionAutor());
		newObj.setDataExtenso(obj.getDataExtenso());
		newObj.setCapituloEspiritual(obj.getCapituloEspiritual());
		newObj.setColetaDoDia(obj.getColetaDoDia());
		newObj.setDespesas(obj.getDespesas());
		newObj.setDiaDaColeta(obj.getDiaDaColeta());
		newObj.setEvent(obj.getEvent());
		newObj.setHoraFinal(obj.getHoraFinal());
		newObj.setMinutoFinal(obj.getMinutoFinal());
		newObj.setNumber(obj.getNumber());
		newObj.setNumero(obj.getNumero());
		newObj.setPaginaEspiritual(obj.getPaginaEspiritual());
		newObj.setPaginaEstudo(obj.getPaginaEstudo());
		newObj.setParagrafoEstudo(obj.getParagrafoEstudo());
		newObj.setRecrutamento(obj.getRecrutamento());
		newObj.setSaldoAnterior(obj.getSaldoAnterior());
		newObj.setSubTotal(obj.getSubTotal());
		newObj.setTitleEspiritual(obj.getTitleEspiritual());
		newObj.setTotalEmCaixa(obj.getTotalEmCaixa());
		newObj.setWork(obj.getWork());
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
