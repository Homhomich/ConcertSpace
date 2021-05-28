package com.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "venue_schedule", schema = "public")
public class VenueSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @JoinColumn(name = "venue_id", referencedColumnName = "id")
    private Venue venueSch;

    @Column
    private Date date;

    public VenueSchedule() {
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
}
