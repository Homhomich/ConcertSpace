package com.controller;

import com.dto.ConcertDTO;
import com.dto.VenueDTO;
import com.dto.VenueRentDTO;
import com.model.*;
import com.service.*;
import org.jboss.logging.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/venues")
public class VenueController {

    private Logger log = Logger.getLogger(this.getClass());

    private final ArtistService artistService;
    private final VenueService venueService;
    private final ConcertService concertService;
    private final TicketSettingsService ticketSettingsService;
    private final ConcertOrganizationService orgService;
    private final UserService userService;

    public VenueController(VenueService venueService, ConcertService concertService, ConcertOrganizationService orgService, UserService userService, TicketService ticketService, ArtistService artistService, TicketSettingsService ticketSettingsService) {
        this.venueService = venueService;
        this.concertService = concertService;
        this.orgService = orgService;
        this.userService = userService;
        this.artistService = artistService;
        this.ticketSettingsService = ticketSettingsService;
    }

    @GetMapping("/all")
    public List<VenueDTO> readAllVenues(){
        log.info("get request from /all");
        List<VenueDTO> dtoList = new ArrayList<>();
        venueService.findAll()
                .forEach(x->dtoList.add(venueService.getVenueDTOWithCorrectDate(x)));
        return dtoList;
    }

    @PostMapping(
            path = "/venue/{id}"
    )
    public VenueDTO readVenue(@PathVariable Integer id){
        log.info("get request from /venue/id");
        Venue venue = venueService.getById(id);
        if (venue!=null) {
            log.info("get venue " + venue.toString());
            return venueService.getVenueDTOWithCorrectDate(venueService.getById(id));
        }
        log.info("venue is null");
        return null;
    }

    @GetMapping("/search")
    public List<VenueDTO> searchVenues(@RequestParam String search){
        log.info("get request from /search");
        log.info("search by " + search);
        List<VenueDTO> dtoList = new ArrayList<>();
        venueService.findAllByVenueNameOrLocation(search).forEach(x->dtoList.add(venueService.getVenueDTOWithCorrectDate(x)));
        return dtoList;
    }

    @PostMapping(path = "/venue/rent")
    public ResponseEntity rentVenue(@RequestParam Integer venueId, @RequestBody VenueRentDTO dto) {
        log.info("get request from /rent");
        ConcertDTO concertDTO = dto.getConcert();
        log.info("get ConcertDTO from VenueRentDTO");
        venueService.addDisabledDataForVenue(venueId, concertDTO.getDate());
        log.info("add disabled data for Venue");
        Artist artist = artistService.createArtistFromDTO(concertDTO.getArtist());
        Concert concert = concertService.createConcertFromDTO(concertDTO, artist, venueService.getById(venueId), dto.getVenueRentParameters(), concertDTO.getTickets());
        log.info("add " + concert.toString());
        ticketSettingsService.setConcert(concert);
//        ticketService.addTickets(concert);
//        log.info("Get request from /buy");
        log.info("create or get user");
        User user = userService.createUserFromDTO(dto.getUserInfo());
        log.info("get " + user.toString());
        orgService.addUser(user, concert);
        log.info("venue rented!");
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
