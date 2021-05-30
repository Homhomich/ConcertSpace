package com.controller;

import com.dto.*;
import com.model.Concert;
import com.model.ConcertOrganization;
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

    public VenueController(VenueService venueService, VenueScheduleService venueScheduleService, ConcertService concertService, ConcertOrganizationService orgService, UserService userService) {
        this.venueService = venueService;
        this.concertService = concertService;
        this.orgService = orgService;
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<VenueDTO> readAllVenues(){
        List<VenueDTO> dtoList = new ArrayList<>();
        venueService.findAll().forEach(x->dtoList.add(venueService.getVenueDTOWithCorrectDate(x)));
        return dtoList;
    }

    @PostMapping(
            path = "/venue/{id}"
    )
    public VenueDTO readVenue(@PathVariable Integer id){
        return venueService.getVenueDTOWithCorrectDate(venueService.getById(id));
    }

    @GetMapping("?search={searchable}")
    public List<VenueDTO> searchConcerts(@PathVariable String searchable){
        List<VenueDTO> dtoList = new ArrayList<>();
        //venueService.findAllByVenueNameOrLocation(searchable).forEach((x) -> dtoList.add(new VenueDTO(x)));
        return dtoList;
    }

    @PostMapping(
            path = "/venue/rent?venueId={id}"
    )
    public void rentVenue(@PathVariable Integer id, @RequestBody VenueRentDTO dto) {
        ConcertDTO concertDTO = dto.getConcert();
        venueService.addDisabledDataForVenue(id, concertDTO.getDate());
        Concert concert = concertService.createConcertFromDTO(concertDTO, concertDTO.getArtist(), venueService.getById(id), dto.getVenueRentParameters(), concertDTO.getTickets());
        User user = userService.createUserFromDTO(dto.getUserInfo());
        orgService.addUser(user, concert);
    }
}