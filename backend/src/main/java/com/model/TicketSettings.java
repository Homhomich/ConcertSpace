package com.model;

import javax.persistence.*;
import java.math.BigDecimal;
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
    private BigDecimal price;
    @Column
    private String ticket_description;

    public TicketSettings() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getTicket_description() {
        return ticket_description;
    }

    public void setTicket_description(String ticket_description) {
        this.ticket_description = ticket_description;
    }
}
