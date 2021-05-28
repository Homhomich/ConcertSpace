package com.controller;

import com.dto.*;
import com.model.Venue;
import com.model.VenueSchedule;
import com.service.ConcertOrganizationService;
import com.service.ConcertService;
import com.service.UserService;
import com.service.VenueService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/venues")
public class VenueController {

    private final VenueService venueService;

    public VenueController(VenueService venueService) {
        this.venueService = venueService;
    }

    @GetMapping("/all")
    public List<VenueDTO> readAllVenues(){
        List<VenueDTO> dtoList = new ArrayList<>();
        venueService.findAll().forEach((x) -> dtoList.add(new VenueDTO(x)));
        return dtoList;
    }

    @PostMapping(
            path = "/venue/{id}"
    )
    public VenueDTO readVenue(@PathVariable Integer id){

        Venue venue = venueService.getById(id);
        VenueDTO venueDTO = new VenueDTO();
        if (venue != null) {
            venueDTO = new VenueDTO(venue);
        }
        return venueDTO;
    }

    @GetMapping("?search={searchable}")
    public List<VenueDTO> searchConcerts(@PathVariable String searchable){
        List<VenueDTO> dtoList = new ArrayList<>();
        venueService.findAllByVenueNameOrLocation(searchable).forEach((x) -> dtoList.add(new VenueDTO(x)));
        return dtoList;
    }

    @PostMapping(
            path = "/venue/rent?venueId={id}"
    )
    public void rentVenue(@PathVariable Integer id, @RequestBody VenueRentDTO dto) {
        Venue venue = venueService.getById(id);
        List<VenueSchedule> venueScheduleList = venue.getDisabledDates();
        VenueSchedule venueSchedule = new VenueSchedule(venue, dto.getConcert().getDate());
        venueScheduleList.add(venueSchedule);
        venueService.update(id, venue);
    }
}