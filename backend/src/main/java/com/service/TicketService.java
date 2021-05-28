package com.service;

import com.dto.TicketDTO;
import com.model.Concert;
import com.model.Ticket;
import com.model.TicketSettings;
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

    public void update(Integer id, Ticket ticket){
        Ticket updated = repository.findById(id).orElse(null);
        if (updated != null){
            updated.setSerialNumber(ticket.getSerialNumber());
            updated.setConcert(ticket.getConcert());
            updated.setCustomerTickets(ticket.getCustomerTickets());
            updated.setTicket_settings(ticket.getTicket_settings());
            repository.save(updated);
        }
    }

    public void createTicketFromDTO(TicketDTO ticketDTO, Concert concert, TicketSettings ticketSettings){
        Ticket ticket = new Ticket();
        ticket.setSerialNumber(ticketDTO.getSerialNumber());
        ticket.setTicket_settings(ticketSettings);
        ticket.setConcert(concert);
        save(ticket);
    }
}
