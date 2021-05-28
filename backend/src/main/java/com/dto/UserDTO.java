package com.dto;

import com.model.User;

public class UserDTO {

    private Integer id;

    private String name;

    private String email;

    private int phone_number;

    public UserDTO(User user){
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.phone_number = user.getPhoneNumber();
    }

    public UserDTO(Integer id, String name, String email, int phone_number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone_number = phone_number;
    }

    public UserDTO() {
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public int getPhone_number() {
        return phone_number;
    }
}
