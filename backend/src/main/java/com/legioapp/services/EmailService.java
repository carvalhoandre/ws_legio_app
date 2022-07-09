package com.legioapp.services;

import javax.mail.internet.MimeMessage;

import org.springframework.mail.SimpleMailMessage;

import com.legioapp.domain.AtaExtenso;

public interface EmailService {

	void sendOrderConfirmationEmail(AtaExtenso obj, String email);

	void sendEmail(SimpleMailMessage msg);

	void sendOrderConfirmationHtmlEmail(AtaExtenso obj, String email);

	void sendHtmlEmail(MimeMessage msg);
}
