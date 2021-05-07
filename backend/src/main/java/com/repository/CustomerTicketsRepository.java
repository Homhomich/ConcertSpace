package com.repository;

import com.model.CustomerTickets;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerTicketsRepository extends JpaRepository<CustomerTickets, Integer> {
}
