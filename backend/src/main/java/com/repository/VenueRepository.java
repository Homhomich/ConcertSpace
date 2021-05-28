package com.repository;

import com.model.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VenueRepository extends JpaRepository<Venue, Integer> {
    List<Venue> findVenuesByVenueNameOrLocationContains(String venue_name, String location);
}
