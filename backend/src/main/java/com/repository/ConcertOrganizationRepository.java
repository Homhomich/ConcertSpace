package com.repository;

import com.model.ConcertOrganization;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConcertOrganizationRepository extends JpaRepository<ConcertOrganization, Integer> {
}
