package com.weighment.api.service.impl;


import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.ResourceLoader;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.export.JRPrintServiceExporter;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimplePrintServiceExporterConfiguration;

@Transactional
@Repository
public class UserDaoImpl {

 @Autowired
 @Qualifier("jdbcTemplate")
 private JdbcTemplate jdbcTemplate;

 @Autowired
 private ResourceLoader resourceLoader;

 public JasperPrint exportPdfFile() throws SQLException, JRException, IOException {
  Connection conn = jdbcTemplate.getDataSource().getConnection();

  String path = resourceLoader.getResource("classpath:rpt_users.jrxml").getURI().getPath();

  JasperReport jasperReport = JasperCompileManager.compileReport(path);

  // Parameters for report
  Map<String, Object> parameters = new HashMap<String, Object>();

  JasperPrint print = JasperFillManager.fillReport(jasperReport, parameters,conn);

  return print;
 }

 public void printReport(JasperPrint jasperPrint, String selectedPrinter) throws JRException {
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
	   System.out.println(service.getName());
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
   System.out.println("You did not set the printer!");
  }
 }
}