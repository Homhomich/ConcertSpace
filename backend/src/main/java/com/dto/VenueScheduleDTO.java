package com.dto;

import com.model.VenueSchedule;

import java.sql.Date;

public class VenueScheduleDTO {

    private Date date;

    public VenueScheduleDTO(VenueSchedule venueSchedule) {
        this.date = venueSchedule.getDate();
    }

    public VenueScheduleDTO(Date date) {
        this.date = date;
    }

    public VenueScheduleDTO() {
    }

    public Date getDate() {
        return date;
    }
}
