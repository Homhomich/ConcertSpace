package com.service;

import com.dto.ArtistDTO;
import com.model.Artist;
import com.repository.ArtistRepository;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistService {

    private Logger log = Logger.getLogger(this.getClass());
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

    public Artist save(Artist artist) {
        return repository.save(artist);
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

    public Artist createArtistFromDTO(ArtistDTO dto){
        log.info("creating user artist DTO " + dto.toString());
        Artist artist = isAlreadyCreate(dto);
        if (artist!=null){
            log.info("artist " + artist.toString() + " is already created");
            return artist;
        }
        else {
            log.info("create new artist");
            artist = new Artist();
            artist.setArtistName(dto.getName());
            artist.setGenre(dto.getGenre());
            log.info("saving artist " + artist);
            log.info("artist saved " + save(artist).toString());
            return artist;
        }
    }

    public Artist isAlreadyCreate(ArtistDTO dto){
        log.info("check artist");
        String dtoName = dto.getName();
        return repository.findArtistByArtistName(dtoName);
    }
}
