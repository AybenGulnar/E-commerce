package com.programming.orderservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient

public class ClientServiceApplication {
	public static void main(String[] as) {
		SpringApplication.run(ClientServiceApplication.class, as);
	}

}
