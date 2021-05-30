package com.model;

import com.dto.ArtistDTO;
import com.dto.TicketSettingsDTO;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "concert", schema = "public")
public class Concert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "artist_id", referencedColumnName = "id")
    private Artist artist;

    @ManyToOne
    @JoinColumn(name = "venue_id", referencedColumnName = "id")
    private Venue venue;

    @ManyToOne
    @JoinColumn(name = "concert_organization_id", referencedColumnName = "id")
    private ConcertOrganization concertOrganization;

    @OneToMany(mappedBy = "concert")
    private List<Ticket> tickets;

    @OneToMany(mappedBy = "concert")
    private List<TicketSettings> ticketSettings;

    @Column(name = "concert_name")
    private String concertName;
    @Column
    private String description;
    @Column
    private Date date;

    public Concert() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getConcertName() {
        return concertName;
    }

    public void setConcertName(String concertName) {
        this.concertName = concertName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public Venue getVenue() {
        return venue;
    }

    public void setVenue(Venue venue) {
        this.venue = venue;
    }

    public ConcertOrganization getConcertOrganization() {
        return concertOrganization;
    }

    public void setConcertOrganization(ConcertOrganization concertOrganization) {
        this.concertOrganization = concertOrganization;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    public List<TicketSettings> getTicketSettings() {
        return ticketSettings;
    }

    public void setTicketSettingsFrom(List<TicketSettingsDTO> dtoList){
        List<TicketSettings> list = new ArrayList<>();
        for (TicketSettingsDTO tsd: dtoList) {
            list.add(new TicketSettings(tsd));
        }
        this.ticketSettings = list;
    }

    public void setTicketSettings(List<TicketSettings> ticketSettings) {
        this.ticketSettings = ticketSettings;
    }
}
