package com.app.tls.domain;



import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

import com.app.tls.domain.enumeration.Prioritet;

import com.app.tls.domain.enumeration.Status;

/**
 * A Cargo.
 */
@Entity
@Table(name = "cargo")
public class Cargo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Size(min = 10, max = 10)
    @Column(name = "i_d_cargo", length = 10, nullable = false)
    private String iDCargo;

    @Column(name = "i_d_nakladnoy")
    private Integer iDNakladnoy;

    @NotNull
    @Size(min = 10, max = 10)
    @Column(name = "i_d_gruza", length = 10, nullable = false)
    private String iDGruza;

    @Column(name = "massa")
    private Integer massa;

    @Column(name = "tekushiy_punkt")
    private String tekushiyPunkt;

    @Column(name = "naznacheniy_punkt")
    private String naznacheniyPunkt;

    @Column(name = "konechniy_punkt")
    private String konechniyPunkt;

    @Column(name = "klient")
    private String klient;

    @Column(name = "telephone_klienta")
    private String telephoneKlienta;

    @Column(name = "dlina_puti")
    private Integer dlinaPuti;

    @Column(name = "data_pribitiya")
    private ZonedDateTime dataPribitiya;

    @Column(name = "data_otpravki")
    private ZonedDateTime dataOtpravki;

    @Enumerated(EnumType.STRING)
    @Column(name = "prioritet")
    private Prioritet prioritet;

    @Column(name = "vremya_puti")
    private Integer vremyaPuti;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Size(max = 300)
    @Column(name = "opisanie", length = 300)
    private String opisanie;

    @Column(name = "chrupkiy")
    private Boolean chrupkiy;

    @Column(name = "otvetstveniy")
    private String otvetstveniy;

    @Column(name = "telephone_otv")
    private String telephoneOtv;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getiDCargo() {
        return iDCargo;
    }

    public Cargo iDCargo(String iDCargo) {
        this.iDCargo = iDCargo;
        return this;
    }

    public void setiDCargo(String iDCargo) {
        this.iDCargo = iDCargo;
    }

    public Integer getiDNakladnoy() {
        return iDNakladnoy;
    }

    public Cargo iDNakladnoy(Integer iDNakladnoy) {
        this.iDNakladnoy = iDNakladnoy;
        return this;
    }

    public void setiDNakladnoy(Integer iDNakladnoy) {
        this.iDNakladnoy = iDNakladnoy;
    }

    public String getiDGruza() {
        return iDGruza;
    }

    public Cargo iDGruza(String iDGruza) {
        this.iDGruza = iDGruza;
        return this;
    }

    public void setiDGruza(String iDGruza) {
        this.iDGruza = iDGruza;
    }

    public Integer getMassa() {
        return massa;
    }

    public Cargo massa(Integer massa) {
        this.massa = massa;
        return this;
    }

    public void setMassa(Integer massa) {
        this.massa = massa;
    }

    public String getTekushiyPunkt() {
        return tekushiyPunkt;
    }

    public Cargo tekushiyPunkt(String tekushiyPunkt) {
        this.tekushiyPunkt = tekushiyPunkt;
        return this;
    }

    public void setTekushiyPunkt(String tekushiyPunkt) {
        this.tekushiyPunkt = tekushiyPunkt;
    }

    public String getNaznacheniyPunkt() {
        return naznacheniyPunkt;
    }

    public Cargo naznacheniyPunkt(String naznacheniyPunkt) {
        this.naznacheniyPunkt = naznacheniyPunkt;
        return this;
    }

    public void setNaznacheniyPunkt(String naznacheniyPunkt) {
        this.naznacheniyPunkt = naznacheniyPunkt;
    }

    public String getKonechniyPunkt() {
        return konechniyPunkt;
    }

    public Cargo konechniyPunkt(String konechniyPunkt) {
        this.konechniyPunkt = konechniyPunkt;
        return this;
    }

    public void setKonechniyPunkt(String konechniyPunkt) {
        this.konechniyPunkt = konechniyPunkt;
    }

    public String getKlient() {
        return klient;
    }

    public Cargo klient(String klient) {
        this.klient = klient;
        return this;
    }

    public void setKlient(String klient) {
        this.klient = klient;
    }

    public String getTelephoneKlienta() {
        return telephoneKlienta;
    }

    public Cargo telephoneKlienta(String telephoneKlienta) {
        this.telephoneKlienta = telephoneKlienta;
        return this;
    }

    public void setTelephoneKlienta(String telephoneKlienta) {
        this.telephoneKlienta = telephoneKlienta;
    }

    public Integer getDlinaPuti() {
        return dlinaPuti;
    }

    public Cargo dlinaPuti(Integer dlinaPuti) {
        this.dlinaPuti = dlinaPuti;
        return this;
    }

    public void setDlinaPuti(Integer dlinaPuti) {
        this.dlinaPuti = dlinaPuti;
    }

    public ZonedDateTime getDataPribitiya() {
        return dataPribitiya;
    }

    public Cargo dataPribitiya(ZonedDateTime dataPribitiya) {
        this.dataPribitiya = dataPribitiya;
        return this;
    }

    public void setDataPribitiya(ZonedDateTime dataPribitiya) {
        this.dataPribitiya = dataPribitiya;
    }

    public ZonedDateTime getDataOtpravki() {
        return dataOtpravki;
    }

    public Cargo dataOtpravki(ZonedDateTime dataOtpravki) {
        this.dataOtpravki = dataOtpravki;
        return this;
    }

    public void setDataOtpravki(ZonedDateTime dataOtpravki) {
        this.dataOtpravki = dataOtpravki;
    }

    public Prioritet getPrioritet() {
        return prioritet;
    }

    public Cargo prioritet(Prioritet prioritet) {
        this.prioritet = prioritet;
        return this;
    }

    public void setPrioritet(Prioritet prioritet) {
        this.prioritet = prioritet;
    }

    public Integer getVremyaPuti() {
        return vremyaPuti;
    }

    public Cargo vremyaPuti(Integer vremyaPuti) {
        this.vremyaPuti = vremyaPuti;
        return this;
    }

    public void setVremyaPuti(Integer vremyaPuti) {
        this.vremyaPuti = vremyaPuti;
    }

    public Status getStatus() {
        return status;
    }

    public Cargo status(Status status) {
        this.status = status;
        return this;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getOpisanie() {
        return opisanie;
    }

    public Cargo opisanie(String opisanie) {
        this.opisanie = opisanie;
        return this;
    }

    public void setOpisanie(String opisanie) {
        this.opisanie = opisanie;
    }

    public Boolean isChrupkiy() {
        return chrupkiy;
    }

    public Cargo chrupkiy(Boolean chrupkiy) {
        this.chrupkiy = chrupkiy;
        return this;
    }

    public void setChrupkiy(Boolean chrupkiy) {
        this.chrupkiy = chrupkiy;
    }

    public String getOtvetstveniy() {
        return otvetstveniy;
    }

    public Cargo otvetstveniy(String otvetstveniy) {
        this.otvetstveniy = otvetstveniy;
        return this;
    }

    public void setOtvetstveniy(String otvetstveniy) {
        this.otvetstveniy = otvetstveniy;
    }

    public String getTelephoneOtv() {
        return telephoneOtv;
    }

    public Cargo telephoneOtv(String telephoneOtv) {
        this.telephoneOtv = telephoneOtv;
        return this;
    }

    public void setTelephoneOtv(String telephoneOtv) {
        this.telephoneOtv = telephoneOtv;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Cargo)) {
            return false;
        }
        return id != null && id.equals(((Cargo) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Cargo{" +
            "id=" + getId() +
            ", iDCargo='" + getiDCargo() + "'" +
            ", iDNakladnoy=" + getiDNakladnoy() +
            ", iDGruza='" + getiDGruza() + "'" +
            ", massa=" + getMassa() +
            ", tekushiyPunkt='" + getTekushiyPunkt() + "'" +
            ", naznacheniyPunkt='" + getNaznacheniyPunkt() + "'" +
            ", konechniyPunkt='" + getKonechniyPunkt() + "'" +
            ", klient='" + getKlient() + "'" +
            ", telephoneKlienta='" + getTelephoneKlienta() + "'" +
            ", dlinaPuti=" + getDlinaPuti() +
            ", dataPribitiya='" + getDataPribitiya() + "'" +
            ", dataOtpravki='" + getDataOtpravki() + "'" +
            ", prioritet='" + getPrioritet() + "'" +
            ", vremyaPuti=" + getVremyaPuti() +
            ", status='" + getStatus() + "'" +
            ", opisanie='" + getOpisanie() + "'" +
            ", chrupkiy='" + isChrupkiy() + "'" +
            ", otvetstveniy='" + getOtvetstveniy() + "'" +
            ", telephoneOtv='" + getTelephoneOtv() + "'" +
            "}";
    }
}
