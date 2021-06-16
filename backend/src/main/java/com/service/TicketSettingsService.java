package com.service;

import com.dto.TicketSettingsDTO;
import com.model.Concert;
import com.model.Ticket;
import com.model.TicketSettings;
import com.repository.TicketRepository;
import com.repository.TicketSettingsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TicketSettingsService {
    private TicketSettingsRepository repository;
    private TicketRepository ticketRepository;

    public TicketSettingsService(TicketSettingsRepository repository, TicketRepository ticketRepository) {
        this.repository = repository;
        this.ticketRepository = ticketRepository;
    }

    public TicketSettings getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<TicketSettings> findAll() {
        return repository.findAll();
    }

    public TicketSettings save(TicketSettings ticketSettings) {
        return repository.save(ticketSettings);
    }

    public List<TicketSettings> saveAll(List<TicketSettingsDTO> ticketSettingsDTO) {
        return repository.saveAll(ticketSettingsDTO.stream().map(TicketSettings::new).collect(Collectors.toList()));
    }

    public TicketSettings decreaseAmount(TicketSettings ts){
        int amount = ts.getAmount();
        if (amount>0) {
            ts.setAmount(--amount);
            return save(ts);
        }else {
            return null;
        }
    }

    public Ticket getBySettings(TicketSettings ts){
        Ticket ticket = new Ticket();
        ticket.setSerialNumber(ts.getId() + ts.getDescription().toUpperCase() + ts.getAmount());
        ticket.setConcert(ts.getConcert());
        ticket.setTicket_settings(ts);
        ticketRepository.save(ticket);
        return ticket;
    }

    public void setConcert(Concert concert) {
        for (TicketSettings ts: concert.getTicketSettings()) {
            ts.setConcert(concert);
            save(ts);
        }
    }
}