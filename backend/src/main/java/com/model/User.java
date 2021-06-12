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
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String email;
    @Column
    private String phoneNumber;

    public User(String firstName, String lastName, String email, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public User() {
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String  phoneNumber) {
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
