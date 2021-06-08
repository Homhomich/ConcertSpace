package com.controller;

import com.dto.ConcertDTO;
import com.dto.UserDTO;
import com.model.Concert;
import com.model.Ticket;
import com.model.TicketSettings;
import com.model.User;
import com.service.*;
import org.jboss.logging.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/concerts")
public class ConcertController {

    private Logger log = Logger.getLogger(this.getClass());

    private final ConcertService concertService;
    private final TicketService ticketService;
    private final TicketSettingsService ticketSettingsService;
    private final UserService userService;
    private final CustomerTicketsService customerTicketsService;

    public ConcertController(ConcertService concertService, TicketService ticketService, TicketSettingsService ticketSettingsService, UserService userService, CustomerTicketsService customerTicketsService) {
        this.concertService = concertService;
        this.ticketSettingsService = ticketSettingsService;
        this.ticketService = ticketService;
        this.userService = userService;
        this.customerTicketsService = customerTicketsService;
    }

    @GetMapping("/all")
    public List<ConcertDTO> readAllConcerts() {
        List<ConcertDTO> dtoList = new ArrayList<>();
        concertService.findAll()
                .forEach((x) -> dtoList.add(new ConcertDTO(x, x.getVenue(), concertService.getTypeOfTickets(x))));
        return dtoList;
    }

    @PostMapping(
            path = "/concert/{id}"
    )
    public ConcertDTO readConcert(@PathVariable Integer id) {
        Concert concert = concertService.getById(id);
        if (concert != null) {
            return new ConcertDTO(concert, concert.getVenue(), concertService.getTypeOfTickets(concert));
        }
        return null;
    }

    @GetMapping("/search")
    public List<ConcertDTO> searchConcerts(@RequestParam String search) {
        List<ConcertDTO> dtoList = new ArrayList<>();
        concertService.findAllByNameOrLocation(search)
                .forEach((x) -> dtoList.add(new ConcertDTO(x, x.getVenue(), concertService.getTypeOfTickets(x))));
        return dtoList;
    }

    @PostMapping(
            path = "/buy"
    )
    public ResponseEntity buyTicket(@RequestParam Integer concertId, @RequestParam Integer ticketId, @RequestBody UserDTO dto) {
        log.info("Get request from /buy");
        Concert concert = concertService.getById(concertId);
        Ticket ticket = ticketService.getById(ticketId);
        TicketSettings ts = ticketService.getById(ticketId).getTicket_settings();
        ticketSettingsService.decreaseAmount(ts);
        log.info("decrease amount of tickets");
        User user = userService.createUserFromDTO(dto);
        customerTicketsService.addLinkBetweenTicketsAndUsers(ticket, user);
        log.info("send email");
        concertService.createEmailFromUser(concert, ticket, user);
        return ResponseEntity.status(HttpStatus.OK).build();
    }


}