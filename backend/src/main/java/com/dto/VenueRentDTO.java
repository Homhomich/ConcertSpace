package com.dto;

public class VenueRentDTO {

    private ConcertDTO concert;

    private ConcertOrganizationDTO venueRentParameters;

    private UserDTO userInfo;

    public VenueRentDTO(ConcertDTO concert, ConcertOrganizationDTO venueRentParameters, UserDTO userInfo) {
        this.concert = concert;
        this.venueRentParameters = venueRentParameters;
        this.userInfo = userInfo;
    }

    public VenueRentDTO() {
    }

    public ConcertDTO getConcert() {
        return concert;
    }

    public ConcertOrganizationDTO getVenueRentParameters() {
        return venueRentParameters;
    }

    public UserDTO getUserInfo() {
        return userInfo;
    }
}
