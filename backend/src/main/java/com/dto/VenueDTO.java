package com.dto;

import com.model.Venue;

import java.sql.Date;
import java.util.List;

public class VenueDTO {

    private Integer id;

    private String name;

    private String type;

    private String location;

    private String description;

    private int rentPerHour;

    private int capacity;

    private String imgPath;

    private String ownerPhone;

    private String ownerEmail;

    private int square;

    private List<String> disabledDates;

    public VenueDTO(Integer id, String name, String type, String location, String description, int rentPerHour, int capacity, String imgPath, String ownerPhone, String ownerEmail, int square, List<String> disabledDates) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.location = location;
        this.description = description;
        this.rentPerHour = rentPerHour;
        this.capacity = capacity;
        this.imgPath = imgPath;
        this.ownerPhone = ownerPhone;
        this.ownerEmail = ownerEmail;
        this.square = square;
        this.disabledDates = disabledDates;
    }

    public VenueDTO(Venue venue, List<String> dates){
        this.id = venue.getId();
        this.name = venue.getVenueName();
        this.location = venue.getLocation();
        this.type = venue.getType();
        this.imgPath = venue.getImgPath();
        this.ownerPhone = venue.getOwnerPhone();
        this.ownerEmail = venue.getOwnerEmail();
        this.description = venue.getDescription();
        this.capacity = venue.getCapacity();
        this.square = venue.getSquare();
        this.rentPerHour = venue.getRentPerHour();
        this.disabledDates = dates;
    }


    public VenueDTO() {
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public String getType() {
        return type;
    }

    public String getImgPath() {
        return imgPath;
    }

    public String getOwnerPhone() {
        return ownerPhone;
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public String getDescription() {
        return description;
    }

    public int getCapacity() {
        return capacity;
    }

    public int getRentPerHour() {
        return rentPerHour;
    }

    public int getSquare() {
        return square;
    }

    public List<String> getDisabledDates() {
        return disabledDates;
    }
}
