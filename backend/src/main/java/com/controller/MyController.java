package com.controller;

import com.dto.VenueDTO;
import com.model.VenueSchedule;
import com.service.VenueService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
public class MyController {

    private final VenueService venueService;

    public MyController(VenueService venueService) {
        this.venueService = venueService;
    }

    @GetMapping("/")
    public List<String> readAllVenues() {
        List<VenueDTO> dtoList = new ArrayList<>();
        venueService.findAll()
                .forEach(x -> dtoList.add(venueService.getVenueDTOWithCorrectDate(x)));
        List<String> stringList = new ArrayList<>();
        for (VenueDTO venueDTO: dtoList
             ) {
            stringList.add(venueDTO.getName());
        }
        return stringList;
    }
}
