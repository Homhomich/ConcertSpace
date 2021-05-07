package com.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "concert", schema = "public")
public class Concert {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @JoinColumn(name = "artist_id", referencedColumnName = "id")
    private Artist artist;

    @ManyToOne
    @JoinColumn(name = "venue_id", referencedColumnName = "id")
    private Venue venue;

    @ManyToOne
    @JoinColumn(name = "concert_organization_id", referencedColumnName = "id")
    private ConcertOrganization concert_organization;

    @OneToMany(mappedBy = "concert")
    private List<Ticket> tickets;

    @OneToMany(mappedBy = "concert")
    private List<TicketSettings> ticketSettings;

    @Column
    private Date date;
    @Column
    private String concert_name;
    @Column
    private String short_descrition;
    @Column
    private String descrition;;

    public Concert() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getConcert_name() {
        return concert_name;
    }

    public void setConcert_name(String concert_name) {
        this.concert_name = concert_name;
    }

    public String getShort_descrition() {
        return short_descrition;
    }

    public void setShort_descrition(String short_descrition) {
        this.short_descrition = short_descrition;
    }

    public String getDescrition() {
        return descrition;
    }

    public void setDescrition(String descrition) {
        this.descrition = descrition;
    }
}
