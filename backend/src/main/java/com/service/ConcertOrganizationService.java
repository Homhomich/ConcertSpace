package com.service;

import com.model.Concert;
import com.model.ConcertOrganization;
import com.model.User;
import com.repository.ConcertOrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public ConcertOrganization save(ConcertOrganization concertOrganization) {
        return repository.save(concertOrganization);
    }

    public void addUser(User user, Concert concert){
        Integer id = concert.getConcertOrganization().getId();
        ConcertOrganization org = getById(id);
        if (org!=null) {
            org.setOrganizer(user);
            List<Concert> list = new ArrayList<>();
            list.add(concert);
            org.setConcerts(list);
            repository.save(org);
        }
    }
}
