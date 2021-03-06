package com.dto;

import com.model.Concert;
import com.model.Venue;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

public class ConcertDTO {

    private final SimpleDateFormat format = new SimpleDateFormat("dd.MM.yyyy");

    private Integer id;

    private String name;

    private ArtistDTO artist;

    private String location;

    private String description;

    private Date date;

    private List<TicketSettingsDTO> tickets;

    private String imgPath;


    public ConcertDTO(Integer id, Date date, String name, String description, String location, String imgPath, ArtistDTO artist, List<TicketSettingsDTO> tickets) {
        this.id = id;
        this.date = date;
        this.name = name;
        this.description = description;
        this.location = location;
        this.imgPath = imgPath;
        this.artist = artist;
        this.tickets = tickets;
    }

    public ConcertDTO(Concert concert, Venue venue, List<TicketSettingsDTO> tickets){
        this.id = concert.getId();
        this.date = concert.getDate();
        this.name = concert.getConcertName();
        this.description = concert.getDescription();
        this.location = venue.getLocation();
        this.imgPath = concert.getImgPath();
        this.artist = new ArtistDTO(concert.getArtist());
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

    public List<TicketSettingsDTO> getTickets() {
        return tickets;
    }

    public String getImgPath() {
        return imgPath;
    }

    public String getDateToString(Date date){
        return format.format(date);
    }

    @Override
    public String toString() {
        return "ConcertDTO{" +
                "name='" + name + '\'' +
                ", artist=" + artist.toString() +
                ", location='" + location + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", tickets=" + tickets.toString() +
                ", imgPath='" + imgPath + '\'' +
                '}';
    }
}
