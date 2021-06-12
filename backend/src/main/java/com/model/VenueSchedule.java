package com.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "venue_schedule", schema = "public")
public class VenueSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "venue_id", referencedColumnName = "id")
    private Venue venueSch;

    @Column
    private Date date;

    public VenueSchedule() {
    }

    public VenueSchedule(Venue venueSch, Date date) {
        this.venueSch = venueSch;
        this.date = date;
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

    public Venue getVenueSch() {
        return venueSch;
    }

    public void setVenueSch(Venue venueSch) {
        this.venueSch = venueSch;
    }

    @Override
    public String toString() {
        return "VenueSchedule{" +
                "date=" + date +
                '}';
    }
}
