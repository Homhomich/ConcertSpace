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
}
