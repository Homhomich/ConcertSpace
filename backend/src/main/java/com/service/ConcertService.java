package com.service;

import com.dto.ArtistDTO;
import com.dto.ConcertDTO;
import com.dto.ConcertOrganizationDTO;
import com.dto.TicketSettingsDTO;
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
    private ConcertOrganizationService concertOrganizationService;
    private TicketSettingsService ticketSettingsService;

    @Autowired
    public void setRepository(ConcertRepository repository){this.repository = repository;}

    @Autowired
    public void setArtistRepository(ArtistRepository artistRepository){this.artistRepository = artistRepository;}

    @Autowired
    public void setConcertOrganizationService(ConcertOrganizationService concertOrganizationService){this.concertOrganizationService = concertOrganizationService;}

    @Autowired
    public void setTicketSettingsService(TicketSettingsService ticketSettingsService){this.ticketSettingsService = ticketSettingsService;};
    
    public Concert getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<Concert> findAll() {
        return repository.findAll();
    }

    public List<Concert> findAllByNameOrLocation(String string) {
        return repository.findConcertsByConcertNameContainsOrVenue_LocationContains(string, string);
    }

    public void save(Concert concert) {
        repository.save(concert);
    }

    public Concert createConcertFromDTO(ConcertDTO concertDTO, ArtistDTO artistDTO, Venue venue, ConcertOrganizationDTO organizationDTO, List<TicketSettingsDTO> ticketSettingsDTO){
        Concert concert = new Concert();
        concert.setConcertName(concertDTO.getName());
        concert.setDescription(concertDTO.getDescription());
        concert.setDate(concertDTO.getDate());
        concert.setArtist(artistRepository.findArtistByArtistName(artistDTO.getName()));
        concert.setConcertOrganization(concertOrganizationService.save(new ConcertOrganization(organizationDTO)));
        concert.setVenue(venue);
        concert.setTicketSettings(ticketSettingsService.saveAll(ticketSettingsDTO));
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