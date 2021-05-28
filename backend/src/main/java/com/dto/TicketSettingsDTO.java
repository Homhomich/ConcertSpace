package com.dto;

import com.model.TicketSettings;

public class TicketSettingsDTO {

    private int price;

    private String ticket_description;

    public TicketSettingsDTO(TicketSettings ticketSettings){
        this.price = ticketSettings.getPrice();
        this.ticket_description = ticketSettings.getType();
    }

    public TicketSettingsDTO(int price, String ticket_description) {
        this.price = price;
        this.ticket_description = ticket_description;
    }

    public TicketSettingsDTO() {
    }

    public int getPrice() {
        return price;
    }

    public String getTicket_description() {
        return ticket_description;
    }
}
