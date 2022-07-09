package com.legioapp.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.legioapp.domain.Ata;
import com.legioapp.repositories.AtaRepository;
import com.legioapp.services.exceptions.DataIntegrityException;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class AtaService {

	@Autowired
	private AtaRepository repo;
	
	public Ata find(Integer  id) {
		Optional<Ata> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Ata.class.getName()));
	}
	
	public Ata insert(Ata obj) {
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
	
	public Ata Update(Ata obj) {
		Ata newObj = find(obj.getId());
		UpdateData(newObj, obj);
		return repo.save(newObj);
	}
	
	public void UpdateData(Ata newObj, Ata obj) {
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
	
	public List<Ata> findAllByDate(String date) {
		List<Ata> obj = repo.findForDate(date);
		return obj;
	}
}
