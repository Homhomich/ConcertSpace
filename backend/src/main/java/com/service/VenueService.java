package com.service;

import com.dto.VenueDTO;
import com.model.Venue;
import com.model.VenueSchedule;
import com.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class VenueService {

    private final SimpleDateFormat format = new SimpleDateFormat("dd.MM.yyyy");

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
        return repository.findVenuesByVenueNameContainsOrLocationContains(venueNameOrLocation, venueNameOrLocation);
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

    public VenueDTO getVenueDTOWithCorrectDate(Venue venue){
        List<VenueSchedule> venueScheduleList = venue.getDisabledDates();
        List<String> dateList = new ArrayList<>();
        for (VenueSchedule venueSchedule: venueScheduleList) {
            dateList.add(format.format(venueSchedule.getDate()));
        }
        return new VenueDTO(venue, dateList);
    }

    public void addDisabledDataForVenue(Integer id, Date date){
        Venue venue = getById(id);
        List<VenueSchedule> venueScheduleList = venue.getDisabledDates();
        VenueSchedule venueSchedule = new VenueSchedule(venue, date);
        venueScheduleList.add(venueSchedule);
        update(id, venue);
    }
}
