package com.dto;

import com.model.Venue;
import com.model.VenueSchedule;

import java.sql.Date;

public class VenueScheduleDTO {

    private Integer id;

    private Venue venue;

    private Date date;

    public VenueScheduleDTO(Integer id, Venue venue, Date date) {
        this.id = id;
        this.venue = venue;
        this.date = date;
    }

    public VenueScheduleDTO() {
    }

    public Date getDate() {
        return date;
    }

    public Integer getId() {
        return id;
    }

    public Venue getVenue() {
        return venue;
    }
}
