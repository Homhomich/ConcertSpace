package com.repository;

import com.model.CustomerTickets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerTicketsRepository extends JpaRepository<CustomerTickets, Integer> {
}
