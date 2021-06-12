package com.dto;

import com.model.TicketSettings;


public class TicketSettingsDTO {

    private Integer id;

    private String name;

    private String description;

    private int amount;

    private int price;

    public TicketSettingsDTO(TicketSettings ticketSettings){
        this.id = ticketSettings.getId();
        this.price = ticketSettings.getPrice();
        this.name = ticketSettings.getType();
        this.amount = ticketSettings.getAmount();
        this.description = ticketSettings.getDescription();
    }

    public TicketSettingsDTO() {
    }

    @Override
    public String toString() {
        return "TicketSettingsDTO{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", amount=" + amount +
                ", price=" + price +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public int getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public int getAmount() {
        return amount;
    }
}
