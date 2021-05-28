package com.dto;

import com.model.Concert;

import java.sql.Date;
import java.util.List;

public class ConcertDTO {

    private Integer id;

    private String name;

    private ArtistDTO artist;

    private String location;

    private String description;

    private Date date;

    private List<TicketDTO> tickets;

    private String imgPath;


    public ConcertDTO(Integer id, Date date, String name, String description, String location, String imgPath, ArtistDTO artist, List<TicketDTO> tickets) {
        this.id = id;
        this.date = date;
        this.name = name;
        this.description = description;
        this.location = location;
        this.imgPath = imgPath;
        this.artist = artist;
        this.tickets = tickets;
    }

    public ConcertDTO() {
    }

    public Date getDate() {
        return date;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getLocation() { return  location; }

    public Integer getId() {
        return id;
    }

    public ArtistDTO getArtist() {
        return artist;
    }

    public List<TicketDTO> getTickets() {
        return tickets;
    }

    public String getImgPath() {
        return imgPath;
    }
}
