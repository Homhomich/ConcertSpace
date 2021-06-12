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

    public User getCurrentUserByColumns(String first, String last, String number, String email) {return repository.findUserByFirstNameContainsAndLastNameContainsAndPhoneNumberContainsAndEmailContains(first, last, number, email);}

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
        User currUser = isAlreadyCreate(dto);
        if (currUser!=null){
            log.info("user " + currUser.toString() + " is already created");
            return currUser;
        }
        else {
            log.info("create new user");
            User user = new User();
            user.setEmail(dto.getEmail());
            user.setFirstName(dto.getFirstName());
            user.setLastName(dto.getLastName());
            user.setPhoneNumber(dto.getPhoneNumber());
            log.info("saving user " + user);
            log.info("user saved " + save(user).toString());
            return user;
        }
    }

    public User isAlreadyCreate(UserDTO dto){
        log.info("check user");
        String dtoEmail = dto.getEmail();
        String dtoFirst = dto.getFirstName();
        String dtoLast = dto.getLastName();
        String dtoNumber = dto.getPhoneNumber();
        return getCurrentUserByColumns(dtoFirst, dtoLast, dtoNumber, dtoEmail);
    }
}
