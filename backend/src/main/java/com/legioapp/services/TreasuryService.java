package com.legioapp.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.Treasury;
import com.legioapp.repositories.TreasuryRepository;
import com.legioapp.services.exceptions.DataIntegrityException;
import com.legioapp.services.exceptions.ObjectNotFoundException;

@Service
public class TreasuryService {

	@Autowired
	private TreasuryRepository repo;
	
	public Treasury find(Integer  id) {
		
		Optional<Treasury> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Treasury.class.getName()));
	}
	
	@Transactional
	public Treasury insert(Treasury obj) {
		Date myDate = new Date();
		SimpleDateFormat mdyFormat = new SimpleDateFormat("dd/MM/yyyy");
		String mdy = mdyFormat.format(myDate);
		obj.setDate(mdy);
		obj.setId(null);
		obj = repo.save(obj);
		return obj;
	}
	
	public Treasury Update(Treasury obj) {
		Treasury newObj = find(obj.getId());
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
	
	public void UpdateData(Treasury newObj, Treasury obj) {
		newObj.setAta(obj.getAta());
		newObj.setColetaDoDia(obj.getColetaDoDia());
		newObj.setDespesas(obj.getDespesas());
		newObj.setDiaDaColeta(obj.getDiaDaColeta());
		newObj.setSaldoAnterior(obj.getSaldoAnterior());
		newObj.setSubTotal(obj.getSubTotal());
		newObj.setTotalEmCaixa(obj.getTotalEmCaixa());
	}
	
	public List<Treasury> findAll() {
		return repo.findAll();
	}
	
	public Treasury findAllById(Integer id) {
		Optional<Treasury> obj = repo.findById(id);
		try {
			return obj.orElseThrow(
					() -> new ObjectNotFoundException("Não localizado " + id + ", tipo" + Treasury.class.getName()));
		} catch (ObjectNotFoundException e) {
			// TODO Auto-generated catch block
			return null;
		}
	}
	
	public List<Treasury> findAllByDate(String date) {
		List<Treasury> obj = repo.findForDate(date);
		return obj;
	}
}
