package com.repository;

import com.model.VenueSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VenueScheduleRepository extends JpaRepository<VenueSchedule, Integer> {
}
