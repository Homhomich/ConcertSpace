package com.dto;

import com.model.Artist;

public class ArtistDTO {

    private Integer id;

    private String name;

    private String genre;

    public ArtistDTO(Artist artist){
        this.id = artist.getId();
        this.name = artist.getArtistName();
        this.genre = artist.getGenre();
    }

    public ArtistDTO(Integer id, String name, String genre) {
        this.id = id;
        this.name = name;
        this.genre = genre;
    }

    public ArtistDTO() {
    }

    @Override
    public String toString() {
        return "ArtistDTO{" +
                "name='" + name + '\'' +
                ", genre='" + genre + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getGenre() {
        return genre;
    }
}
