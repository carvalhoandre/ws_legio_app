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
	public void sendOrderConfirmationEmail(AtaExtenso obj, String email) {
		SimpleMailMessage sm = prepareSimpleMailMessageFromPedido(obj, email);
		sendEmail(sm);
	}

	protected SimpleMailMessage prepareSimpleMailMessageFromPedido(AtaExtenso obj, String email) {
		SimpleMailMessage sm = new SimpleMailMessage();
		sm.setTo(email);
		sm.setFrom(sender);
		sm.setSubject("Pré Ata de número: " + obj.getNumber());
		sm.setSentDate(new Date(System.currentTimeMillis()));
		sm.setText(obj.toString());
		return sm;
	}
	
	protected String htmlFromTemplatePedido(AtaExtenso obj) {
		Context context = new Context();
		context.setVariable("ataExtenso", obj);
		return templateEngine.process("email/confirmacaoAtaExtenso", context);
	}
	
	@Override
	public void sendOrderConfirmationHtmlEmail(AtaExtenso obj, String email) {
		try {
			MimeMessage mm = prepareMimeMessageFromPedido(obj);
			sendHtmlEmail(mm);
		}
		catch(MessagingException e){
			sendOrderConfirmationEmail(obj, email);
		}
	}
	
	protected MimeMessage prepareMimeMessageFromPedido(AtaExtenso obj) throws MessagingException {
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mmh = new MimeMessageHelper(mimeMessage, true);
		mmh.setTo("legiomariae@outlook.com.br");
		mmh.setSentDate(new Date(System.currentTimeMillis()));
		mmh.setText(htmlFromTemplatePedido(obj), true);
		mmh.setFrom(sender);
		mmh.setSubject("Pré Ata de número: " + obj.getNumber());
		return mimeMessage;
	}
}