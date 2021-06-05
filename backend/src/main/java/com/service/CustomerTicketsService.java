package com.service;

import com.model.CustomerTickets;
import com.model.Ticket;
import com.model.User;
import com.repository.CustomerTicketsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTicketsService {
    private CustomerTicketsRepository repository;

    @Autowired
    public void setRepository(CustomerTicketsRepository repository){this.repository = repository;}

    public CustomerTickets getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<CustomerTickets> findAll() {
        return repository.findAll();
    }

    public void save(CustomerTickets customerTickets) {
        repository.save(customerTickets);
    }

    public void addLinkBetweenTicketsAndUsers(Ticket ticket, User user){
        CustomerTickets customerTickets = new CustomerTickets();
        customerTickets.setUser(user);
        customerTickets.setTicket(ticket);
        save(customerTickets);
    }
}
