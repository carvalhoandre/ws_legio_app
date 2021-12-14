package com.legioapp.services;

import java.util.Date;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.legioapp.domain.AtaExtenso;

public abstract class AbstractEmailService implements EmailService {
	
	@Value("${default.sender}")
	private String sender;
	
	@Autowired
	private TemplateEngine templateEngine;
		
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Override
	public void sendOrderConfirmationEmail(AtaExtenso obj) {
		SimpleMailMessage sm = prepareSimpleMailMessageFromAtaExtenso(obj);
		sendEmail(sm);
	}
	
	protected SimpleMailMessage prepareSimpleMailMessageFromAtaExtenso(AtaExtenso obj) {
		SimpleMailMessage sm = new SimpleMailMessage();
		sm.setTo("legiomariae@outlook.com.br");
		sm.setFrom(sender);
		sm.setSubject("Recebimento Nova Ata");
		sm.setSentDate(new Date(System.currentTimeMillis()));
		sm.setText(obj.toString());
		return sm;
	}
	
	protected String htmlFromTemplateAtaExtenso(AtaExtenso obj) {
		Context context = new Context();
		context.setVariable("ata", obj);
		return templateEngine.process("email/confirmacaoEmail", context);
	}
	
	@Override
	public void sendOrderConfirmationHtmlEmail(AtaExtenso obj) {
		try {
			MimeMessage mm = prepareMimeMessageFromAtaExtension(obj);
			sendHtmlEmail(mm);
		}
		catch(MessagingException e) {
			sendOrderConfirmationEmail(obj);
		}
	}
	
	protected MimeMessage prepareMimeMessageFromAtaExtension(AtaExtenso obj) throws MessagingException {
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mmh = new MimeMessageHelper(mimeMessage, true);
		mmh.setTo("legiomariae@outlook.com.br");
		mmh.setSentDate(new Date(System.currentTimeMillis()));
		mmh.setText(htmlFromTemplateAtaExtenso(obj), true);
		mmh.setFrom(sender);
		mmh.setSubject("Send new Ata");
		return mimeMessage;
	}
}
