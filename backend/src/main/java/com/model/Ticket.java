package com.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "ticket", schema = "public")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @JoinColumn(name = "concert_id", referencedColumnName = "id")
    private Concert concert;

    @ManyToOne
    @JoinColumn(name = "ticket_settings_id", referencedColumnName = "id")
    private TicketSettings ticket_settings;

    @OneToMany(mappedBy = "ticket")
    private List<CustomerTickets> customerTickets;

    @Column
    private String serialNumber;

    public Ticket() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public Concert getConcert() {
        return concert;
    }

    public void setConcert(Concert concert) {
        this.concert = concert;
    }

    public TicketSettings getTicket_settings() {
        return ticket_settings;
    }

    public void setTicket_settings(TicketSettings ticket_settings) {
        this.ticket_settings = ticket_settings;
    }

    public List<CustomerTickets> getCustomerTickets() {
        return customerTickets;
    }

    public void setCustomerTickets(List<CustomerTickets> customerTickets) {
        this.customerTickets = customerTickets;
    }
}
