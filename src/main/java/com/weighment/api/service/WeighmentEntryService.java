package com.weighment.api.service;

import java.io.IOException;
import java.sql.SQLException;

import com.weighment.api.model.JsonResponse;
import com.weighment.api.model.WeighmentEntryDetails;

import net.sf.jasperreports.engine.JRException;

public interface WeighmentEntryService {
	public JsonResponse save(WeighmentEntryDetails weighmentEntryDetails) throws SQLException, JRException, IOException, Exception;

}
