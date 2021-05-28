package com.service;

import com.dto.ConcertDTO;
import com.model.*;
import com.repository.ConcertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConcertService {
    private ConcertRepository repository;

    @Autowired
    public void setRepository(ConcertRepository repository){this.repository = repository;}

    public Concert getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<Concert> findAll() {
        return repository.findAll();
    }

    public List<Concert> findAllByNameOrLocation(String concertName) {
        return repository.findConcertsByConcertNameOrLocationContains(concertName, concertName);
    }

    public void save(Concert concert) {
        repository.save(concert);
    }

    public void update(Integer id, Concert concert){
        Concert updated = repository.findById(id).orElse(null);
        if (updated != null){
            updated.setConcertName(concert.getConcertName());
            updated.setDescription(concert.getDescription());
            updated.setLocation(concert.getLocation());
            updated.setDate(concert.getDate());
            updated.setArtist(concert.getArtist());
            updated.setConcertOrganization(concert.getConcertOrganization());
            updated.setTickets(concert.getTickets());
            updated.setTicketSettings(concert.getTicketSettings());
            updated.setVenue(concert.getVenue());
            updated.setTickets(concert.getTickets());
            repository.save(updated);
        }
    }

    public Integer createConcertFromDTO(ConcertDTO concertDTO, Artist artist, Venue venue, ConcertOrganization concertOrganization, List<Ticket> tickets){
        Concert concert = new Concert();
        concert.setConcertName(concertDTO.getName());
        concert.setDescription(concertDTO.getDescription());
        concert.setDate(concertDTO.getDate());
        concert.setArtist(artist);
        concert.setConcertOrganization(concertOrganization);
        concert.setVenue(venue);
        concert.setTickets(tickets);
        save(concert);
        return concert.getId();
    }
}