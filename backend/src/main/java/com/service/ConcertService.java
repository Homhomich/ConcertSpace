package com.service;

import com.dto.*;
import com.model.*;
import com.repository.ArtistRepository;
import com.repository.ConcertOrganizationRepository;
import com.repository.ConcertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ConcertService {
    private ConcertRepository repository;
    private ArtistRepository artistRepository;

    @Autowired
    public void setRepository(ConcertRepository repository){this.repository = repository;}

    @Autowired
    public void setArtistRepository(ArtistRepository artistRepository){this.artistRepository = artistRepository;}

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
        return repository.findConcertsByConcertNameContains(concertName);
    }

    public void save(Concert concert) {
        repository.save(concert);
    }

    public void update(Integer id, Concert concert){
        Concert updated = repository.findById(id).orElse(null);
        if (updated != null){
            updated.setConcertName(concert.getConcertName());
            updated.setDescription(concert.getDescription());
            //updated.setLocation(concert.getLocation());
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

    public Concert createConcertFromDTO(ConcertDTO concertDTO, ArtistDTO artistDTO, Venue venue, ConcertOrganizationDTO organizationDTO, List<TicketSettingsDTO> ticketsDTO){
        Concert concert = new Concert();
        concert.setConcertName(concertDTO.getName());
        concert.setDescription(concertDTO.getDescription());
        concert.setDate(concertDTO.getDate());
        concert.setArtist(artistRepository.findArtistByArtistName(artistDTO.getName()));
        concert.setConcertOrganization(new ConcertOrganization((organizationDTO)));
        concert.setVenue(venue);
        concert.setTicketSettingsFrom(ticketsDTO);
        save(concert);
        return concert;
    }

    public List<TicketSettingsDTO> getTypeOfTickets(Concert concert){
        List<TicketSettingsDTO> dtoList = new ArrayList<>();
        for (TicketSettings ts: concert.getTicketSettings()) {
            dtoList.add(new TicketSettingsDTO(ts));
        }
        return dtoList;
    }

    public void createEmailFromUser(Concert concert, Ticket ticket, User user){

    }
}