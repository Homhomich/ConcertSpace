package com.controller;

import com.dto.ConcertDTO;
import com.dto.VenueDTO;
import com.dto.VenueRentDTO;
import com.model.Concert;
import com.model.User;
import com.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/venues")
public class VenueController {

    private final VenueService venueService;
    private final ConcertService concertService;
    private final ConcertOrganizationService orgService;
    private final UserService userService;
    private final TicketService ticketService;

    public VenueController(VenueService venueService, VenueScheduleService venueScheduleService, ConcertService concertService, ConcertOrganizationService orgService, UserService userService, TicketService ticketService) {
        this.venueService = venueService;
        this.concertService = concertService;
        this.orgService = orgService;
        this.userService = userService;
        this.ticketService = ticketService;
    }

    @GetMapping("/all")
    public List<VenueDTO> readAllVenues(){
        List<VenueDTO> dtoList = new ArrayList<>();
        venueService.findAll()
                .forEach(x->dtoList.add(venueService.getVenueDTOWithCorrectDate(x)));
        return dtoList;
    }

    @PostMapping(
            path = "/venue/{id}"
    )
    public VenueDTO readVenue(@PathVariable Integer id){
        return venueService.getVenueDTOWithCorrectDate(venueService.getById(id));
    }

    @GetMapping("/search")
    public List<VenueDTO> searchVenues(@RequestParam String search){
        List<VenueDTO> dtoList = new ArrayList<>();
        venueService.findAllByVenueNameOrLocation(search).forEach(x->dtoList.add(venueService.getVenueDTOWithCorrectDate(x)));
        return dtoList;
    }

    @PostMapping(
            path = "/venue/rent?venueId={id}"
    )
    public void rentVenue(@PathVariable Integer id, @RequestBody VenueRentDTO dto) {
        ConcertDTO concertDTO = dto.getConcert();
        venueService.addDisabledDataForVenue(id, concertDTO.getDate());
        Concert concert = concertService.createConcertFromDTO(concertDTO, concertDTO.getArtist(), venueService.getById(id), dto.getVenueRentParameters(), concertDTO.getTickets());
        ticketService.addTickets(concert);
        User user = userService.createUserFromDTO(dto.getUserInfo());
        orgService.addUser(user, concert);
    }
}