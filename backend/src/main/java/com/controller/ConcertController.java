package com.controller;

import com.dto.ConcertDTO;
import com.model.Concert;
import com.service.ConcertOrganizationService;
import com.service.ConcertService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/concerts")
public class ConcertController {

    private final ConcertService concertService;

    public ConcertController(ConcertService concertService) {
        this.concertService = concertService;
    }

    @GetMapping("/all")
    public List<ConcertDTO> readAllConcerts(){
        List<ConcertDTO> dtoList = new ArrayList<>();
        concertService.findAll().forEach((x) -> dtoList.add(new ConcertDTO(x)));
        return dtoList;
    }

    @PostMapping(
            path = "/concert/{id}"
    )
    public ConcertDTO readConcert(@PathVariable Integer id){

        Concert concert = concertService.getById(id);
        ConcertDTO concertDTO = new ConcertDTO();
        if (concert != null) {
            concertDTO = new ConcertDTO(concert);
        }
        return concertDTO;
    }

    @GetMapping("?search={searchable}")
    public List<ConcertDTO> searchConcerts(@PathVariable String searchable){
        List<ConcertDTO> dtoList = new ArrayList<>();
        concertService.findAllByNameOrLocation(searchable).forEach((x) -> dtoList.add(new ConcertDTO(x)));
        return dtoList;
    }

    @PostMapping(
            path = "/buy"
    )
    public void buyTicket(){

    }


}
