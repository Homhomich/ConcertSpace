package com.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "venue", schema = "public")
public class Venue {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToMany(mappedBy = "venue")
    private List<Concert> concerts;

    @ManyToOne
    @JoinColumn(name = "venue_schedule_id", referencedColumnName = "id")
    private VenueSchedule venue_schedule;

    @Column
    private String venue_name;
    @Column
    private String location;
    @Column
    private String type;
    @Column
    private String path;
    @Column
    private String venue_email;
    @Column
    private int capacity;
    @Column
    private BigDecimal rent_per_hour;
    @Column
    private int square;
    @Column
    private int venue_phone_number;
    @Column
    private String description;
    @Column
    private String short_description;

    public Venue() {
    }

    public String getVenue_name() {
        return venue_name;
    }

    public void setVenue_name(String venue_name) {
        this.venue_name = venue_name;
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

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getShort_description() {
        return short_description;
    }

    public void setShort_description(String short_description) {
        this.short_description = short_description;
    }

    public BigDecimal getRent_per_hour() {
        return rent_per_hour;
    }

    public void setRent_per_hour(BigDecimal rent_per_hour) {
        this.rent_per_hour = rent_per_hour;
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

    public String getVenue_email() {
        return venue_email;
    }

    public void setVenue_email(String venue_email) {
        this.venue_email = venue_email;
    }

    public int getSquare() {
        return square;
    }

    public void setSquare(int square) {
        this.square = square;
    }

    public int getVenue_phone_number() {
        return venue_phone_number;
    }

    public void setVenue_phone_number(int venue_phone_number) {
        this.venue_phone_number = venue_phone_number;
    }
}
