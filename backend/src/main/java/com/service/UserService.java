package com.service;

import com.dto.UserDTO;
import com.model.User;
import com.repository.UserRepository;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private Logger log = Logger.getLogger(this.getClass());

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

    public User save(User user) {
        return repository.save(user);
    }

    public User createUserFromDTO(UserDTO dto){
        log.info("creating user from DTO " + dto.toString());
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setName(dto.getName());
        user.setPhoneNumber(dto.getPhoneNumber());
        log.info("saving user " + user);
        log.info("user saved " + save(user).toString());
        return user;
    }
}
