package com.repository;

import com.model.VenueSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VenueScheduleRepository extends JpaRepository<VenueSchedule, Integer> {
}
