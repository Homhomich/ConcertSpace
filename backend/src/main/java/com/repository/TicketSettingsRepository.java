package com.repository;

import com.model.TicketSettings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketSettingsRepository extends JpaRepository<TicketSettings, Integer> {
}
