package com.controller;

import com.dto.*;
import com.model.Venue;
import com.model.VenueSchedule;
import com.service.VenueScheduleService;
import com.service.VenueService;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/venues")
public class VenueController {

    private final VenueService venueService;
    
    private final SimpleDateFormat format = new SimpleDateFormat("dd.MM.yyyy");

    public VenueController(VenueService venueService, VenueScheduleService venueScheduleService) {
        this.venueService = venueService;
    }

    @GetMapping("/all")
    public List<VenueDTO> readAllVenues(){
        List<VenueDTO> dtoList = new ArrayList<>();
        venueService.findAll().forEach(x->dtoList.add(getVenueDTOWithCorrectDate(x)));
        return dtoList;
    }

    @PostMapping(
            path = "/venue/{id}"
    )
    public VenueDTO readVenue(@PathVariable Integer id){
        return getVenueDTOWithCorrectDate(venueService.getById(id));
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
        Venue venue = venueService.getById(id);
        List<VenueSchedule> venueScheduleList = venue.getDisabledDates();
        VenueSchedule venueSchedule = new VenueSchedule(venue, dto.getConcert().getDate());
        venueScheduleList.add(venueSchedule);

        venueService.update(id, venue);
    }

    public VenueDTO getVenueDTOWithCorrectDate(Venue venue){
        List<VenueSchedule> venueScheduleList = venue.getDisabledDates();
        List<String> dateList = new ArrayList<>();
        for (VenueSchedule venueSchedule: venueScheduleList) {
            dateList.add(format.format(venueSchedule.getDate()));
        }
        return new VenueDTO(venue, dateList);
    }
}