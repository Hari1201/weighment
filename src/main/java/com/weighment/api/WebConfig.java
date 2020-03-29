package com.weighment.api;

import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
public class WebConfig extends  WebMvcAutoConfiguration {

   /* @Value("${appName.developmentUrl}")
    private String devUrl;

    @Value("${appName.productionUrl}")
    private String prodUrl;

    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedMethods("GET", "POST", "PUT", "DELETE").allowedOrigins(devUrl, prodUrl).allowedHeaders("*");
    }*/
    
/*    @Bean
    public InternalResourceViewResolver jspViewResolver() {
        InternalResourceViewResolver resolver= new InternalResourceViewResolver();
        resolver.setPrefix("/resources/static/");
        resolver.setSuffix("index.html");
        return resolver;
    }  
*/
    

}