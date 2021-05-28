package com.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "ticket_settings", schema = "public")
public class TicketSettings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @JoinColumn(name = "concert_id", referencedColumnName = "id")
    private Concert concert;

    @OneToMany(mappedBy = "ticket_settings")
    private List<Ticket> tickets;

    @Column
    private int price;
    @Column
    private String type;

    public TicketSettings() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Concert getConcert() {
        return concert;
    }

    public void setConcert(Concert concert) {
        this.concert = concert;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}
