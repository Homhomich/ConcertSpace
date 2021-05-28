package com.service;

import com.model.User;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository repository;

    @Autowired
    public void setRepository(UserRepository repository){this.repository = repository;}

    public User getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<User> findAll() {
        return repository.findAll();
    }

    public void save(User user) {
        repository.save(user);
    }

    public void update(Integer id, User user){
        User updated = repository.findById(id).orElse(null);
        if (updated != null){
            updated.setName(user.getName());
            updated.setPhoneNumber(user.getPhoneNumber());
            updated.setEmail(user.getEmail());
            updated.setConcertOrganizations(user.getConcertOrganizations());
            updated.setCustomerTickets(user.getCustomerTickets());
            repository.save(updated);
        }
    }
}
