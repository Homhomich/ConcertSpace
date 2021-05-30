package com.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user", schema = "public")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToMany(mappedBy = "organizer")
    private List<ConcertOrganization> concertOrganizations;

    @OneToMany(mappedBy = "user")
    private List<CustomerTickets> customerTickets;

    @Column
    private String name;
    @Column
    private String email;
    @Column
    private int phoneNumber;

    public User(String name, String email, int phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public User() {
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", concertOrganizations=" + concertOrganizations +
                ", customerTickets=" + customerTickets +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber=" + phoneNumber +
                '}';
    }

    public Integer getId() {
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

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<ConcertOrganization> getConcertOrganizations() {
        return concertOrganizations;
    }

    public void setConcertOrganizations(List<ConcertOrganization> concertOrganizations) {
        this.concertOrganizations = concertOrganizations;
    }

    public List<CustomerTickets> getCustomerTickets() {
        return customerTickets;
    }

    public void setCustomerTickets(List<CustomerTickets> customerTickets) {
        this.customerTickets = customerTickets;
    }
}
