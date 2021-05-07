package com.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "artist", schema = "public")
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToMany(mappedBy = "artist")
    private List<Concert> concerts;

    @Column
    private String artist_name;
    @Column
    private String genre;

    public Artist(String artist_name, String genre) {
        this.artist_name = artist_name;
        this.genre = genre;
    }

    public Artist() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getArtist_name() {
        return artist_name;
    }

    public void setArtist_name(String artist_name) {
        this.artist_name = artist_name;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}
