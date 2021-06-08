package com.model;

import com.dto.TicketSettingsDTO;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "ticket_settings", schema = "public")
public class TicketSettings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @Column
    private String description;
    @Column
    private int amount;

    public TicketSettings() {
    }

    public TicketSettings(TicketSettingsDTO dto) {
        this.price = dto.getPrice();
        this.type = dto.getName();
        this.description = dto.getDescription();
        this.amount = dto.getAmount();
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
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

    @Override
    public String toString() {
        return "TicketSettings{" +
                "id=" + id +
                ", concert=" + concert +
                ", tickets=" + tickets +
                ", price=" + price +
                ", type='" + type + '\'' +
                ", description='" + description + '\'' +
                ", amount=" + amount +
                '}';
    }
}
