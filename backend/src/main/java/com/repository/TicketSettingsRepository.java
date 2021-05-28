package com.repository;

import com.model.TicketSettings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketSettingsRepository extends JpaRepository<TicketSettings, Integer> {
}
