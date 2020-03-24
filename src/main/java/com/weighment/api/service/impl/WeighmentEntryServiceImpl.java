package com.weighment.api.service.impl;

import java.sql.Connection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.print.PrintService;
import javax.print.PrintServiceLookup;
import javax.print.attribute.HashPrintRequestAttributeSet;
import javax.print.attribute.HashPrintServiceAttributeSet;
import javax.print.attribute.PrintRequestAttributeSet;
import javax.print.attribute.PrintServiceAttributeSet;
import javax.print.attribute.standard.MediaSizeName;
import javax.print.attribute.standard.OrientationRequested;
import javax.print.attribute.standard.PrinterName;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.ResourceLoader;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.weighment.api.entity.CustomerDetailsEntity;
import com.weighment.api.entity.ProductDetailsEntity;
import com.weighment.api.entity.VehicleDetailsEntity;
import com.weighment.api.entity.WeighmentEntryDetailsEntity;
import com.weighment.api.mapper.WeighmentEntryServiceMapper;
import com.weighment.api.model.Constants;
import com.weighment.api.model.JsonResponse;
import com.weighment.api.model.WeighmentEntryDetails;
import com.weighment.api.repo.CustomerDetailsRepository;
import com.weighment.api.repo.ProductDetailsRepository;
import com.weighment.api.repo.VehicleDetailsRepository;
import com.weighment.api.repo.WeighmentEntryDetailsRepository;
import com.weighment.api.service.WeighmentEntryService;

import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.export.JRPrintServiceExporter;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimplePrintServiceExporterConfiguration;

@Service
public class WeighmentEntryServiceImpl implements WeighmentEntryService {

	
	@Autowired
	WeighmentEntryServiceMapper weighmentEntryServiceMapper;	
	
	@Autowired
	CustomerDetailsRepository customerDetailsRepository;
	
	@Autowired
	ProductDetailsRepository productDetailsRepository;
	
	@Autowired
	VehicleDetailsRepository vehicleDetailsRepository;
	
	@Autowired
	WeighmentEntryDetailsRepository weighmentEntryDetailsRepository;
	
	 @Autowired
	 private ResourceLoader resourceLoader;
	 
/*	 @Autowired
	 private DataSource dataSource;*/

	 @Autowired
	 @Qualifier("jdbcTemplate")
	 private JdbcTemplate jdbcTemplate;
	 
	 @Override
	public JsonResponse save(WeighmentEntryDetails weighmentEntryDetails) throws Exception {
		
		WeighmentEntryDetailsEntity addEntry = new WeighmentEntryDetailsEntity();
		weighmentEntryServiceMapper.mapWeighmentEntryDetailsToWeighmentEntryDetailsEntity(weighmentEntryDetails, addEntry);
		addEntry.setCreatedDate(new Date());
		CustomerDetailsEntity customerDetailsEntity = customerDetailsRepository.findByCustomerId(weighmentEntryDetails.getCustomerId());
		if(customerDetailsEntity==null) {
			return new JsonResponse(Boolean.FALSE,"Please select customer!!!");
		}else {
			addEntry.setCustomerId(customerDetailsEntity.getCustomerId());
		}		
		ProductDetailsEntity  productDetailsEntity= productDetailsRepository.findByProductId(weighmentEntryDetails.getProductId());
		if(productDetailsEntity==null) {
			return new JsonResponse(Boolean.FALSE,"Please select product!!!");
		}else {
			addEntry.setProductId(productDetailsEntity.getProductId());
		}
		VehicleDetailsEntity vehicleDetailsEntity = vehicleDetailsRepository.findByvehicleId(weighmentEntryDetails.getVehicleId());
		if(vehicleDetailsEntity==null) {
			return new JsonResponse(Boolean.FALSE,"Please select vehicle!!!");
		}else {
			addEntry.setVehicleId(vehicleDetailsEntity.getVehicleId());
		}
		WeighmentEntryDetailsEntity savedEntity = weighmentEntryDetailsRepository.saveAndFlush(addEntry);
		if (savedEntity != null) {
			  /*PrintService[] services = PrintServiceLookup.lookupPrintServices(null, null);
			  PrintService selectedService = null;
			  if (services.length != 0 || services != null) {
			   for (PrintService service : services) {
			    String existingPrinter = service.getName();
			    if (existingPrinter.equals(Constants.PRINTER)) {
			     selectedService = service;
			     break;
			    }
			   }
			  }*/
				try {
					//exportPdfFile(savedEntity.getWeiId().longValue(), Constants.PRINTER);
					//exportPdfFile(savedEntity);
				} catch (Exception e) {
					throw  e;
				}
			
			return new JsonResponse(Boolean.TRUE, "Data Saved Successfully!!!");
		}
		
		return null;
	}
	 
	 public JasperPrint exportPdfFile(WeighmentEntryDetailsEntity savedEntity) throws Exception {
		  Connection conn = jdbcTemplate.getDataSource().getConnection();

		  String path = resourceLoader.getResource("classpath:rpt_users.jrxml").getURI().getPath();

		  JasperReport jasperReport = JasperCompileManager.compileReport(path);

		  // Parameters for report
		  Map<String, Object> parameters = new HashMap<String, Object>();
		  parameters.put("wed_id",savedEntity.getWeiId().longValue());

		  JasperPrint print = JasperFillManager.fillReport(jasperReport, parameters,conn);
		  printReport(print, Constants.PRINTER);
		  return print;
		 }

		 public void printReport(JasperPrint jasperPrint, String selectedPrinter) throws Exception {
		  PrintRequestAttributeSet printRequestAttributeSet = new HashPrintRequestAttributeSet();
		  printRequestAttributeSet.add(MediaSizeName.ISO_A4);
		  if (jasperPrint.getOrientationValue() == net.sf.jasperreports.engine.type.OrientationEnum.LANDSCAPE) {
		   printRequestAttributeSet.add(OrientationRequested.LANDSCAPE);
		  } else {
		   printRequestAttributeSet.add(OrientationRequested.PORTRAIT);
		  }
		  PrintServiceAttributeSet printServiceAttributeSet = new HashPrintServiceAttributeSet();
		  printServiceAttributeSet.add(new PrinterName(selectedPrinter, null));

		  JRPrintServiceExporter exporter = new JRPrintServiceExporter();
		  SimplePrintServiceExporterConfiguration configuration = new SimplePrintServiceExporterConfiguration();
		  configuration.setPrintRequestAttributeSet(printRequestAttributeSet);
		  configuration.setPrintServiceAttributeSet(printServiceAttributeSet);
		  configuration.setDisplayPageDialog(false);
		  configuration.setDisplayPrintDialog(false);

		  exporter.setExporterInput(new SimpleExporterInput(jasperPrint));
		  exporter.setConfiguration(configuration);

		  PrintService[] services = PrintServiceLookup.lookupPrintServices(null, null);
		  PrintService selectedService = null;
		  if (services.length != 0 || services != null) {
		   for (PrintService service : services) {
		    String existingPrinter = service.getName();
		    if (existingPrinter.equals(selectedPrinter)) {
		     selectedService = service;
		     break;
		    }
		   }
		  }

		  if (selectedService != null) {
		   exporter.exportReport();
		  } else {
			  throw new Exception("Check Printer");
			  }
		 }

	/* public void exportPdfFile(Long entryId, String printer) throws Exception {
		 Connection conn = dataSource.getConnection(); 
		  String path = resourceLoader.getResource("classpath:rpt_users.jrxml").getURI().getPath();
		  JasperReport jasperReport = JasperCompileManager.compileReport(path);
		  Map<String, Object> parameters = new HashMap<String, Object>();
		  parameters.put("wed_id",1);
		  JasperPrint print = JasperFillManager.fillReport(jasperReport, parameters,conn);
		  printReport(print,printer);
		 }

		 public void printReport(JasperPrint jasperPrint, String printer) throws Exception {
		  PrintRequestAttributeSet printRequestAttributeSet = new HashPrintRequestAttributeSet();
		  printRequestAttributeSet.add(MediaSizeName.ISO_A4);
		  if (jasperPrint.getOrientationValue() == net.sf.jasperreports.engine.type.OrientationEnum.LANDSCAPE) {
		   printRequestAttributeSet.add(OrientationRequested.LANDSCAPE);
		  } else {
		   printRequestAttributeSet.add(OrientationRequested.PORTRAIT);
		  }
		  PrintServiceAttributeSet printServiceAttributeSet = new HashPrintServiceAttributeSet();
		  printServiceAttributeSet.add(new PrinterName(printer, null));

		  JRPrintServiceExporter exporter = new JRPrintServiceExporter();
		  SimplePrintServiceExporterConfiguration configuration = new SimplePrintServiceExporterConfiguration();
		  configuration.setPrintRequestAttributeSet(printRequestAttributeSet);
		  configuration.setPrintServiceAttributeSet(printServiceAttributeSet);
		  configuration.setDisplayPageDialog(false);
		  configuration.setDisplayPrintDialog(false);

		  exporter.setExporterInput(new SimpleExporterInput(jasperPrint));
		  exporter.setConfiguration(configuration);

		  PrintService[] services = PrintServiceLookup.lookupPrintServices(null, null);
		  PrintService selectedService = null;
		  if (services.length != 0 || services != null) {
		   for (PrintService service : services) {
		    String existingPrinter = service.getName();
		    if (existingPrinter.equals(printer)) {
		     selectedService = service;
		     break;
		    }
		   }
		  } 
		  if (selectedService != null) {
			   exporter.exportReport();
		  } else {
			  throw new Exception();}
		 }*/
}
