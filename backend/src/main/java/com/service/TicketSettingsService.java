package com.service;

import com.model.TicketSettings;
import com.repository.TicketSettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketSettingsService {
    private TicketSettingsRepository repository;

    @Autowired
    public void setRepository(TicketSettingsRepository repository){this.repository = repository;}

    public TicketSettings getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<TicketSettings> findAll() {
        return repository.findAll();
    }

    public void save(TicketSettings ticketSettings) {
        repository.save(ticketSettings);
    }

    public void decreaseAmount(TicketSettings ts){
        int amount = ts.getAmount();
        ts.setAmount(--amount);
        save(ts);
    }

}