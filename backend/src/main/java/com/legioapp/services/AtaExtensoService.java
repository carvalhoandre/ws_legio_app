package com.legioapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legioapp.domain.AtaExtenso;

@Service
public class AtaExtensoService {

	@Autowired
	private EmailService emailService;
	
	@Transactional
	public AtaExtenso sendAtaExtensoForEmail(AtaExtenso obj, String email) {
		emailService.sendOrderConfirmationHtmlEmail(obj, email);
		return obj;
	}
}
