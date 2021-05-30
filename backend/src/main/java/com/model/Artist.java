package com.model;

import com.dto.ArtistDTO;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "artist", schema = "public")
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "artist")
    private List<Concert> concerts;

    @Column(name = "artist_name")
    private String artistName;
    @Column
    private String genre;

    public Artist() {
    }

    public Artist(ArtistDTO dto){
        this.artistName = dto.getName();
        this.genre = dto.getGenre();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public List<Concert> getConcerts() {
        return concerts;
    }

    public void setConcerts(List<Concert> concerts) {
        this.concerts = concerts;
    }
}
