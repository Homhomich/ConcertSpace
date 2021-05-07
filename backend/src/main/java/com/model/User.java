package com.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user", schema = "public")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToMany(mappedBy = "organizer")
    private List<ConcertOrganization> concertOrganizations;

    @OneToMany(mappedBy = "user")
    private List<CustomerTickets> customerTickets;

    @Column
    private String name;
    @Column
    private String email;
    @Column
    private int phone_number;

    public User(String name, String email, int phone_number) {
        this.name = name;
        this.email = email;
        this.phone_number = phone_number;
    }

    public User() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(int phone_number) {
        this.phone_number = phone_number;
    }
}
