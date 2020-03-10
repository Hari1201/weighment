package com.weighment.api.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class JsonResponse implements Serializable{

	private static final long serialVersionUID = 1L;

	private String message;	
	
	private boolean success;

	private Object obj;

	

	public JsonResponse() {
		super();
	}

	public JsonResponse(Object obj, String msg, boolean success) {
		super();
		this.obj = obj;
		this.message = msg;
		this.success = success;
	}

	
	public JsonResponse(Object obj, boolean success) {
		super();
		this.obj = obj;
		this.success = success;
	}
	

	public JsonResponse(boolean success,String message) {
		super();
		this.success = success;
		this.message = message;
	}


	public Object getObj() {
		return obj;
	}

	public void setObj(Object obj) {
		this.obj = obj;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}


	
	
}