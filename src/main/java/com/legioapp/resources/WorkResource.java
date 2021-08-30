package com.legioapp.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/works")
public class WorkResource {
	
	@RequestMapping(method = RequestMethod.GET)
	public String list() {
		return "REST está funcionando";
	}
	
}
