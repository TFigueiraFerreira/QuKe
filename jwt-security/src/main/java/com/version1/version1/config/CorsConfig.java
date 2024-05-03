package com.version1.version1.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        // Permitir solicitações de todas as origens
        config.addAllowedOrigin("*");
        // Permitir solicitações GET, POST, PUT, DELETE e OPTIONS
        config.addAllowedMethod("*");
        // Permitir cabeçalhos específicos
        config.addAllowedHeader("*");
        source.registerCorsConfiguration("/api/v1/**", config); // Aplicar a configuração a todos os endpoints da API
        return new CorsFilter(source);
    }
}
