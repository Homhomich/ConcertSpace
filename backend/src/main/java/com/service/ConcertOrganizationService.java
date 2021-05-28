package com.service;

import com.dto.ConcertOrganizationDTO;
import com.model.ConcertOrganization;
import com.model.User;
import com.repository.ConcertOrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConcertOrganizationService {
    private ConcertOrganizationRepository repository;

    @Autowired
    public void setRepository(ConcertOrganizationRepository repository){this.repository = repository;}

    public ConcertOrganization getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<ConcertOrganization> findAll() {
        return repository.findAll();
    }

    public void save(ConcertOrganization concertOrganization) {
        repository.save(concertOrganization);
    }

    public void update(Integer id, ConcertOrganization concertOrganization){
        ConcertOrganization updated = repository.findById(id).orElse(null);
        if (updated != null){
            updated.setBar(concertOrganization.isBar());
            updated.setHookah(concertOrganization.isHookah());
            updated.setCanBringLiquids(concertOrganization.isCanBringLiquids());
            updated.setLightShow(concertOrganization.isLightShow());
            updated.setShooting(concertOrganization.isShooting());
            updated.setSnack(concertOrganization.isSnack());
            updated.setConcerts(concertOrganization.getConcerts());
            updated.setOrganizer(concertOrganization.getOrganizer());
            repository.save(updated);
        }
    }

    public void createConcertOrganizationFromDTO(ConcertOrganizationDTO concertOrganizationDTO, User organizer){
        ConcertOrganization concertOrganization = new ConcertOrganization();
        concertOrganization.setBar(concertOrganizationDTO.isBar());
        concertOrganization.setSnack(concertOrganizationDTO.isSnack());
        concertOrganization.setCanBringLiquids(concertOrganizationDTO.isCanBringLiquids());
        concertOrganization.setHookah(concertOrganizationDTO.isHookah());
        concertOrganization.setShooting(concertOrganizationDTO.isShooting());
        concertOrganization.setLightShow(concertOrganizationDTO.isLightShow());
        concertOrganization.setOrganizer(organizer);
        save(concertOrganization);
    }
}
