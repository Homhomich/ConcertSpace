package com.dto;

import com.model.TicketSettings;

public class TicketDTO {

    private Integer id;

    private int key;

    private String name;

    private String description;

    private int price;


    public TicketDTO(TicketSettings ticket){
        this.id = ticket.getId();
        this.name = ticket.getType();
        this.price = ticket.getPrice();
        this.description = ticket.getDescription();
    }

    public TicketDTO() {
    }

    public Integer getId() {
        return id;
    }

    public int getKey() {
        return key;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public int getPrice() {
        return price;
    }
}
