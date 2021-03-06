package com.legioapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.legioapp.services.EmailService;
import com.legioapp.services.SmtpEmailService;

@Configuration
@Profile("dev")
public class DevConfig {
	
	@Bean
	public EmailService emailService() {
		return new SmtpEmailService();
	}

}
