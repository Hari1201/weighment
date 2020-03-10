package com.weighment.api.repo;

import org.springframework.data.repository.CrudRepository;

import com.weighment.api.model.Ticket;

public interface TicketDao extends CrudRepository<Ticket, Integer>{

}
