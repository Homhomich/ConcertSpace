package com.service;

import com.dto.ArtistDTO;
import com.model.Artist;
import com.repository.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistService {
    private ArtistRepository repository;

    @Autowired
    public void setRepository(ArtistRepository repository){this.repository = repository;}

    public Artist getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<Artist> findAll() {
        return repository.findAll();
    }

    public void save(Artist artist) {
        repository.save(artist);
    }

    public void update(Integer id, Artist artist){
        Artist updated = repository.findById(id).orElse(null);
        if (updated != null){
            updated.setArtistName(artist.getArtistName());
            updated.setGenre(artist.getGenre());
            updated.setConcerts(artist.getConcerts());
            repository.save(updated);
        }
    }
}
