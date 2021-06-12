package com.model;


import javax.persistence.*;
import java.sql.Date;
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
    @Column(columnDefinition = "LONGTEXT")
    private String description;
    @Column
    private String imgPath;
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

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public List<TicketSettings> getTicketSettings() {
        return ticketSettings;
    }

    public void setTicketSettings(List<TicketSettings> ticketSettings) {
        this.ticketSettings = ticketSettings;
    }

    @Override
    public String toString() {
        return "Concert{" +
                "id=" + id +
                ", artist=" + artist.toString() +
                ", venue=" + venue.toString() +
                ", concertOrganization=" + concertOrganization.toString() +
                ", ticketSettings=" + ticketSettings +
                ", concertName='" + concertName + '\'' +
                ", description='" + description + '\'' +
                ", imgPath='" + imgPath + '\'' +
                ", date=" + date +
                '}';
    }
}
