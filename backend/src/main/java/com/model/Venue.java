package com.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "venue", schema = "public")
public class Venue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "venue")
    private List<Concert> concerts;

    @OneToMany(mappedBy = "venueSch")
    private List<VenueSchedule> disabledDates;

    @Column(name = "venue_name")
    private String venueName;
    @Column
    private String location;
    @Column
    private String type;
    @Column
    private String imgPath;
    @Column
    private String ownerEmail;
    @Column
    private int capacity;
    @Column(name = "rent_per_hour")
    private int rentPerHour;
    @Column
    private int square;
    @Column
    private String ownerPhone;
    @Column
    private String description;
    

    public Venue() {
    }

    public String getVenueName() {
        return venueName;
    }

    public void setVenueName(String venueName) {
        this.venueName = venueName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getRentPerHour() {
        return rentPerHour;
    }

    public void setRentPerHour(int rentPerHour) {
        this.rentPerHour = rentPerHour;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }

    public int getSquare() {
        return square;
    }

    public void setSquare(int square) {
        this.square = square;
    }

    public String getOwnerPhone() {
        return ownerPhone;
    }

    public void setOwnerPhone(String ownerPhone) {
        this.ownerPhone = ownerPhone;
    }

    public List<Concert> getConcerts() {
        return concerts;
    }

    public void setConcerts(List<Concert> concerts) {
        this.concerts = concerts;
    }

    public List<VenueSchedule> getDisabledDates() {
        return disabledDates;
    }

    public void setDisabledDates(List<VenueSchedule> disabledDates) {
        this.disabledDates = disabledDates;
    }
}
