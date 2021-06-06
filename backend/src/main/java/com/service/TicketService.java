package com.service;

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

    public void addTickets(Concert concert){
        for (int i = 0; i < concert.getTicketSettings().size(); i++){
            TicketSettings ts = concert.getTicketSettings().get(i);
            String serial = getSerialNumber(ts);
            for (int j = 0; j < ts.getAmount(); j++){
                Ticket ticket = new Ticket();
                ticket.setConcert(concert);
                ticket.setTicket_settings(ts);
                ticket.setSerialNumber(serial);
            }
        }

    }

    public void deleteTicket(Ticket ticket){
        if (ticket.getTicket_settings().getAmount() > 0){
            deleteChosenTicket(ticket);
        }
    }

    public void deleteChosenTicket(Ticket ticket){
        TicketSettingsService tss = new TicketSettingsService();
        tss.decreaseAmount(ticket.getTicket_settings());
        delete(ticket.getId());
    }

    public String getSerialNumber(TicketSettings ts){
        return ts.getDescription() + ts.getAmount();
    }

}
