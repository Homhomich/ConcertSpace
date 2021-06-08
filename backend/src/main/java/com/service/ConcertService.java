package com.service;

import com.config.SendEmail;
import com.dto.ArtistDTO;
import com.dto.ConcertDTO;
import com.dto.ConcertOrganizationDTO;
import com.dto.TicketSettingsDTO;
import com.model.*;
import com.repository.ArtistRepository;
import com.repository.ConcertRepository;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ConcertService {
    private ConcertRepository repository;
    private ArtistRepository artistRepository;
    private ConcertOrganizationService concertOrganizationService;
    private TicketSettingsService ticketSettingsService;

    @Autowired
    SendEmail sendEmail;

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

    public void sendEmailForUser(Ticket ticket, User user) throws IOException {
        Concert concert = ticket.getConcert();
        TicketSettings ts = ticket.getTicket_settings();
        String text = String.format(
                "Hello, %s! \n" +
                        "Here is your ticket!\n" +
                        "Data: %s; \n " +
                        "Location: %s; \n" +
                        "Artist:  %s; \n" +
                        "Serial number:  %s; \n" +
                        "Price:  %s; \n" +
                        "Type:  %s; \n" +
                        "Description %s; \n",
                user.getName(), concert.getDate(), concert.getVenue().getLocation(), concert.getArtist().getArtistName(), ticket.getSerialNumber(),
                ts.getPrice(), ts.getType(),ts.getDescription()
        );
        String s1 = "Data: " + concert.getDate();
        String s2 = "Location: " + concert.getVenue().getLocation();
        String s3 = "Artist: " +  concert.getArtist().getArtistName();
        String s4 = "Price: " + ts.getPrice();
        String s5 = "Type: " + ts.getType();
        String s6 = "Description: " + ts.getDescription();


        System.out.println(text);
        PDDocument pdf = new PDDocument();
        pdf.addPage(new PDPage());
        PDPage page = pdf.getPage(0);
        PDPageContentStream contentStream = new PDPageContentStream(pdf, page);
        /*PDImageXObject pdImage = PDImageXObject.createFromFile("src/main/resources/file/dog.jpg",pdf);
        contentStream.drawImage(pdImage, 0, 0);*/
        contentStream.beginText();
        contentStream.setFont(PDType1Font.TIMES_ROMAN, 16);
        contentStream.setLeading(14.5f);
        contentStream.newLineAtOffset(50, 550);
        contentStream.showText(s1);
        contentStream.newLine();
//        contentStream.tex(s2);
//        contentStream.newLine();
//        contentStream.drawString(s3);
//        contentStream.newLine();
//        contentStream.drawString(s4);
//        contentStream.newLine();
//        contentStream.drawString(s5);
//        contentStream.newLine();
//        contentStream.drawString(s6);

        contentStream.endText();
        contentStream.close();
        pdf.save("src/main/resources/file/ticket.pdf");
        pdf.close();
        sendEmail.sendAttach(user.getEmail(), text, concert.getConcertName());

    }
}