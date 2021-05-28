package com.service;

import com.dto.VenueScheduleDTO;
import com.model.VenueSchedule;
import com.repository.VenueScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VenueScheduleService {
    private VenueScheduleRepository repository;

    @Autowired
    public void setRepository(VenueScheduleRepository repository){this.repository = repository;}

    public VenueSchedule getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<VenueSchedule> findAll() {
        return repository.findAll();
    }

    public void save(VenueSchedule venueSchedule) {
        repository.save(venueSchedule);
    }

    public void update(Integer id, VenueSchedule venueSchedule){
        VenueSchedule updated = repository.findById(id).orElse(null);
        if (updated != null){
            updated.setDate(venueSchedule.getDate());
            updated.setVenueSch(venueSchedule.getVenueSch());
            repository.save(updated);
        }
    }

    public void createVenueScheduleFromDTO(VenueScheduleDTO venueScheduleDTO){
        VenueSchedule venueSchedule = new VenueSchedule();
        venueSchedule.setDate(venueScheduleDTO.getDate());
        save(venueSchedule);
    }

}
