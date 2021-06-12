package com.repository;

import com.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findUserByFirstNameContainsAndLastNameContainsAndPhoneNumberContainsAndEmailContains(String first, String last, String number, String email);
    //User findUserByFirstNameContainsAndLastNameContainsAndPhoneNumberContainsAndEmailContains(String first, String last, String number, String email);
}
