package com.repository;

import com.model.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface VenueRepository extends JpaRepository<Venue, Integer> {
}
