package com.repository;

import com.model.ConcertOrganization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConcertOrganizationRepository extends JpaRepository<ConcertOrganization, Integer> {
}
