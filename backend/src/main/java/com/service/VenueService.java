package com.service;

import com.dto.VenueDTO;
import com.model.Venue;
import com.model.VenueSchedule;
import com.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VenueService {
    private VenueRepository repository;

    @Autowired
    public void setRepository(VenueRepository repository){this.repository = repository;}

    public Venue getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<Venue> findAll() {
        return repository.findAll();
    }

    public List<Venue> findAllByVenueNameOrLocation(String venueNameOrLocation) {
        return repository.findVenuesByVenueNameOrLocationContains(venueNameOrLocation, venueNameOrLocation);
    }

    public void save(Venue venue) {
        repository.save(venue);
    }

    public void update(Integer id, Venue venue){
        Venue updated = repository.findById(id).orElse(null);
        if (updated != null){
            updated.setCapacity(venue.getCapacity());
            updated.setDescription(venue.getDescription());
            updated.setLocation(venue.getLocation());
            updated.setImgPath(venue.getImgPath());
            updated.setRentPerHour(venue.getRentPerHour());
            updated.setSquare(venue.getSquare());
            updated.setType(venue.getType());
            updated.setVenueName(venue.getVenueName());
            updated.setOwnerEmail(venue.getOwnerEmail());
            updated.setOwnerPhone(venue.getOwnerPhone());
            updated.setConcerts(venue.getConcerts());
            updated.setDisabledDates(venue.getDisabledDates());
            repository.save(updated);
        }
    }

    public void createVenueFromDTO(VenueDTO venueDTO, List<VenueSchedule> venueScheduleList){
        Venue venue = new Venue();
        venue.setCapacity(venueDTO.getCapacity());
        venue.setDescription(venueDTO.getDescription());
        venue.setLocation(venueDTO.getLocation());
        venue.setImgPath(venueDTO.getImgPath());
        venue.setRentPerHour(venueDTO.getRentPerHour());
        venue.setSquare(venueDTO.getSquare());
        venue.setType(venueDTO.getType());
        venue.setVenueName(venueDTO.getName());
        venue.setOwnerEmail(venueDTO.getOwnerEmail());
        venue.setOwnerPhone(venueDTO.getOwnerPhone());
        venue.setDisabledDates(venueScheduleList);
        save(venue);
    }
}
