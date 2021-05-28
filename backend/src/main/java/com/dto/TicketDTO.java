package com.dto;

import com.model.Ticket;

public class TicketDTO {

    private Integer id;

    private String name;

    private String description;

    public TicketDTO(Integer id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public TicketDTO() {
    }

    public String getName() {
        return name;
    }

    public Integer getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }
}
