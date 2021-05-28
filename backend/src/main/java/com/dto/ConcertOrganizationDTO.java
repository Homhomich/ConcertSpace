package com.dto;

import com.model.ConcertOrganization;

public class ConcertOrganizationDTO {

    private Integer id;

    private boolean bar;

    private boolean snack;

    private boolean shooting;

    private boolean lightShow;

    private boolean canBringLiquids;

    private boolean hookah;

    public ConcertOrganizationDTO(ConcertOrganization concertOrganization){
        this.id = concertOrganization.getId();
        this.bar = concertOrganization.isBar();
        this.canBringLiquids = concertOrganization.isCanBringLiquids();
        this.hookah = concertOrganization.isHookah();
        this.lightShow = concertOrganization.isLightShow();
        this.shooting = concertOrganization.isShooting();
        this.snack = concertOrganization.isSnack();
    }

    public ConcertOrganizationDTO(Integer id, boolean bar, boolean snack, boolean shooting, boolean lightShow, boolean canBringLiquids, boolean hookah) {
        this.id = id;
        this.bar = bar;
        this.snack = snack;
        this.shooting = shooting;
        this.lightShow = lightShow;
        this.canBringLiquids = canBringLiquids;
        this.hookah = hookah;
    }

    public ConcertOrganizationDTO() {
    }

    public Integer getId() {
        return id;
    }

    public boolean isBar() {
        return bar;
    }

    public boolean isSnack() {
        return snack;
    }

    public boolean isShooting() {
        return shooting;
    }

    public boolean isLightShow() {
        return lightShow;
    }

    public boolean isCanBringLiquids() {
        return canBringLiquids;
    }

    public boolean isHookah() {
        return hookah;
    }
}
