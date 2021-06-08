package com.model;

import com.dto.ConcertOrganizationDTO;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "concert_organization", schema = "public")
public class ConcertOrganization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "concertOrganization")
    private List<Concert> concerts;

    @ManyToOne
    @JoinColumn(name = "organizer_id", referencedColumnName = "id")
    private User organizer;

    @Column
    private boolean bar;
    @Column
    private boolean snack;
    @Column
    private boolean shooting;
    @Column
    private boolean lightShow;
    @Column
    private boolean canBringLiquids;
    @Column
    private boolean hookah;

    public ConcertOrganization() {
    }

    public ConcertOrganization(ConcertOrganizationDTO dto){
        this.bar = dto.isBar();
        this.snack = dto.isSnack();
        this.shooting = dto.isShooting();
        this.lightShow = dto.isLightShow();
        this.canBringLiquids = dto.isCanBringLiquids();
        this.hookah = dto.isHookah();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isBar() {
        return bar;
    }

    public void setBar(boolean bar) {
        this.bar = bar;
    }

    public boolean isSnack() {
        return snack;
    }

    public void setSnack(boolean snack) {
        this.snack = snack;
    }

    public boolean isShooting() {
        return shooting;
    }

    public void setShooting(boolean shooting) {
        this.shooting = shooting;
    }

    public boolean isLightShow() {
        return lightShow;
    }

    public void setLightShow(boolean lightShow) {
        this.lightShow = lightShow;
    }

    public boolean isCanBringLiquids() {
        return canBringLiquids;
    }

    public void setCanBringLiquids(boolean canBringLiquids) {
        this.canBringLiquids = canBringLiquids;
    }

    public boolean isHookah() {
        return hookah;
    }

    public void setHookah(boolean hookah) {
        this.hookah = hookah;
    }

    public List<Concert> getConcerts() {
        return concerts;
    }

    public void setConcerts(List<Concert> concerts) {
        this.concerts = concerts;
    }

    public User getOrganizer() {
        return organizer;
    }

    public void setOrganizer(User organizer) {
        this.organizer = organizer;
    }

    @Override
    public String toString() {
        return "ConcertOrganization{" +
                "id=" + id +
                ", bar=" + bar +
                ", snack=" + snack +
                ", shooting=" + shooting +
                ", lightShow=" + lightShow +
                ", canBringLiquids=" + canBringLiquids +
                ", hookah=" + hookah +
                '}';
    }
}
