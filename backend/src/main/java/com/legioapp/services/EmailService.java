package com.legioapp.services;

import javax.mail.internet.MimeMessage;

import org.springframework.mail.SimpleMailMessage;

import com.legioapp.domain.AtaExtenso;

public interface EmailService {
	
	void sendOrderConfirmationEmail(AtaExtenso obj);
	
	void sendEmail(SimpleMailMessage msg);
	
	void sendOrderConfirmationHtmlEmail(AtaExtenso obj);
	
	void sendHtmlEmail(MimeMessage msg);

}
