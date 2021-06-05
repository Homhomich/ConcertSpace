package com.service;

import com.model.Ticket;
import com.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {
    private TicketRepository repository;

    @Autowired
    public void setRepository(TicketRepository repository){this.repository = repository;}

    public Ticket getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<Ticket> findAll() {
        return repository.findAll();
    }

    public void save(Ticket ticket) {
        repository.save(ticket);
    }

}
