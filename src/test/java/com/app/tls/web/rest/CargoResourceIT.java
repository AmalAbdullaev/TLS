package com.app.tls.web.rest;

import com.app.tls.TlsApp;
import com.app.tls.domain.Cargo;
import com.app.tls.repository.CargoRepository;
import com.app.tls.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.time.Instant;
import java.time.ZonedDateTime;
import java.time.ZoneOffset;
import java.time.ZoneId;
import java.util.List;

import static com.app.tls.web.rest.TestUtil.sameInstant;
import static com.app.tls.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.app.tls.domain.enumeration.Prioritet;
import com.app.tls.domain.enumeration.Status;
/**
 * Integration tests for the {@Link CargoResource} REST controller.
 */
@SpringBootTest(classes = TlsApp.class)
public class CargoResourceIT {

    private static final String DEFAULT_I_D_CARGO = "AAAAAAAAAA";
    private static final String UPDATED_I_D_CARGO = "BBBBBBBBBB";

    private static final Integer DEFAULT_I_D_NAKLADNOY = 1;
    private static final Integer UPDATED_I_D_NAKLADNOY = 2;

    private static final String DEFAULT_I_D_GRUZA = "AAAAAAAAAA";
    private static final String UPDATED_I_D_GRUZA = "BBBBBBBBBB";

    private static final Integer DEFAULT_MASSA = 1;
    private static final Integer UPDATED_MASSA = 2;

    private static final String DEFAULT_TEKUSHIY_PUNKT = "AAAAAAAAAA";
    private static final String UPDATED_TEKUSHIY_PUNKT = "BBBBBBBBBB";

    private static final String DEFAULT_NAZNACHENIY_PUNKT = "AAAAAAAAAA";
    private static final String UPDATED_NAZNACHENIY_PUNKT = "BBBBBBBBBB";

    private static final String DEFAULT_KONECHNIY_PUNKT = "AAAAAAAAAA";
    private static final String UPDATED_KONECHNIY_PUNKT = "BBBBBBBBBB";

    private static final String DEFAULT_KLIENT = "AAAAAAAAAA";
    private static final String UPDATED_KLIENT = "BBBBBBBBBB";

    private static final String DEFAULT_TELEPHONE_KLIENTA = "AAAAAAAAAA";
    private static final String UPDATED_TELEPHONE_KLIENTA = "BBBBBBBBBB";

    private static final Integer DEFAULT_DLINA_PUTI = 1;
    private static final Integer UPDATED_DLINA_PUTI = 2;

    private static final ZonedDateTime DEFAULT_DATA_PRIBITIYA = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_DATA_PRIBITIYA = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final ZonedDateTime DEFAULT_DATA_OTPRAVKI = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_DATA_OTPRAVKI = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final Prioritet DEFAULT_PRIORITET = Prioritet.VISOKIY;
    private static final Prioritet UPDATED_PRIORITET = Prioritet.SREDNIY;

    private static final Integer DEFAULT_VREMYA_PUTI = 1;
    private static final Integer UPDATED_VREMYA_PUTI = 2;

    private static final Status DEFAULT_STATUS = Status.NOVAYA;
    private static final Status UPDATED_STATUS = Status.VIPOLNYAETSA;

    private static final String DEFAULT_OPISANIE = "AAAAAAAAAA";
    private static final String UPDATED_OPISANIE = "BBBBBBBBBB";

    private static final Boolean DEFAULT_CHRUPKIY = false;
    private static final Boolean UPDATED_CHRUPKIY = true;

    private static final String DEFAULT_OTVETSTVENIY = "AAAAAAAAAA";
    private static final String UPDATED_OTVETSTVENIY = "BBBBBBBBBB";

    private static final String DEFAULT_TELEPHONE_OTV = "AAAAAAAAAA";
    private static final String UPDATED_TELEPHONE_OTV = "BBBBBBBBBB";

    @Autowired
    private CargoRepository cargoRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restCargoMockMvc;

    private Cargo cargo;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final CargoResource cargoResource = new CargoResource(cargoRepository);
        this.restCargoMockMvc = MockMvcBuilders.standaloneSetup(cargoResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Cargo createEntity(EntityManager em) {
        Cargo cargo = new Cargo()
            .iDCargo(DEFAULT_I_D_CARGO)
            .iDNakladnoy(DEFAULT_I_D_NAKLADNOY)
            .iDGruza(DEFAULT_I_D_GRUZA)
            .massa(DEFAULT_MASSA)
            .tekushiyPunkt(DEFAULT_TEKUSHIY_PUNKT)
            .naznacheniyPunkt(DEFAULT_NAZNACHENIY_PUNKT)
            .konechniyPunkt(DEFAULT_KONECHNIY_PUNKT)
            .klient(DEFAULT_KLIENT)
            .telephoneKlienta(DEFAULT_TELEPHONE_KLIENTA)
            .dlinaPuti(DEFAULT_DLINA_PUTI)
            .dataPribitiya(DEFAULT_DATA_PRIBITIYA)
            .dataOtpravki(DEFAULT_DATA_OTPRAVKI)
            .prioritet(DEFAULT_PRIORITET)
            .vremyaPuti(DEFAULT_VREMYA_PUTI)
            .status(DEFAULT_STATUS)
            .opisanie(DEFAULT_OPISANIE)
            .chrupkiy(DEFAULT_CHRUPKIY)
            .otvetstveniy(DEFAULT_OTVETSTVENIY)
            .telephoneOtv(DEFAULT_TELEPHONE_OTV);
        return cargo;
    }

    @BeforeEach
    public void initTest() {
        cargo = createEntity(em);
    }

    @Test
    @Transactional
    public void createCargo() throws Exception {
        int databaseSizeBeforeCreate = cargoRepository.findAll().size();

        // Create the Cargo
        restCargoMockMvc.perform(post("/api/cargos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isCreated());

        // Validate the Cargo in the database
        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeCreate + 1);
        Cargo testCargo = cargoList.get(cargoList.size() - 1);
        assertThat(testCargo.getiDCargo()).isEqualTo(DEFAULT_I_D_CARGO);
        assertThat(testCargo.getiDNakladnoy()).isEqualTo(DEFAULT_I_D_NAKLADNOY);
        assertThat(testCargo.getiDGruza()).isEqualTo(DEFAULT_I_D_GRUZA);
        assertThat(testCargo.getMassa()).isEqualTo(DEFAULT_MASSA);
        assertThat(testCargo.getTekushiyPunkt()).isEqualTo(DEFAULT_TEKUSHIY_PUNKT);
        assertThat(testCargo.getNaznacheniyPunkt()).isEqualTo(DEFAULT_NAZNACHENIY_PUNKT);
        assertThat(testCargo.getKonechniyPunkt()).isEqualTo(DEFAULT_KONECHNIY_PUNKT);
        assertThat(testCargo.getKlient()).isEqualTo(DEFAULT_KLIENT);
        assertThat(testCargo.getTelephoneKlienta()).isEqualTo(DEFAULT_TELEPHONE_KLIENTA);
        assertThat(testCargo.getDlinaPuti()).isEqualTo(DEFAULT_DLINA_PUTI);
        assertThat(testCargo.getDataPribitiya()).isEqualTo(DEFAULT_DATA_PRIBITIYA);
        assertThat(testCargo.getDataOtpravki()).isEqualTo(DEFAULT_DATA_OTPRAVKI);
        assertThat(testCargo.getPrioritet()).isEqualTo(DEFAULT_PRIORITET);
        assertThat(testCargo.getVremyaPuti()).isEqualTo(DEFAULT_VREMYA_PUTI);
        assertThat(testCargo.getStatus()).isEqualTo(DEFAULT_STATUS);
        assertThat(testCargo.getOpisanie()).isEqualTo(DEFAULT_OPISANIE);
        assertThat(testCargo.isChrupkiy()).isEqualTo(DEFAULT_CHRUPKIY);
        assertThat(testCargo.getOtvetstveniy()).isEqualTo(DEFAULT_OTVETSTVENIY);
        assertThat(testCargo.getTelephoneOtv()).isEqualTo(DEFAULT_TELEPHONE_OTV);
    }

    @Test
    @Transactional
    public void createCargoWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = cargoRepository.findAll().size();

        // Create the Cargo with an existing ID
        cargo.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restCargoMockMvc.perform(post("/api/cargos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        // Validate the Cargo in the database
        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void checkiDCargoIsRequired() throws Exception {
        int databaseSizeBeforeTest = cargoRepository.findAll().size();
        // set the field null
        cargo.setiDCargo(null);

        // Create the Cargo, which fails.

        restCargoMockMvc.perform(post("/api/cargos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkiDGruzaIsRequired() throws Exception {
        int databaseSizeBeforeTest = cargoRepository.findAll().size();
        // set the field null
        cargo.setiDGruza(null);

        // Create the Cargo, which fails.

        restCargoMockMvc.perform(post("/api/cargos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllCargos() throws Exception {
        // Initialize the database
        cargoRepository.saveAndFlush(cargo);

        // Get all the cargoList
        restCargoMockMvc.perform(get("/api/cargos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(cargo.getId().intValue())))
            .andExpect(jsonPath("$.[*].iDCargo").value(hasItem(DEFAULT_I_D_CARGO.toString())))
            .andExpect(jsonPath("$.[*].iDNakladnoy").value(hasItem(DEFAULT_I_D_NAKLADNOY)))
            .andExpect(jsonPath("$.[*].iDGruza").value(hasItem(DEFAULT_I_D_GRUZA.toString())))
            .andExpect(jsonPath("$.[*].massa").value(hasItem(DEFAULT_MASSA)))
            .andExpect(jsonPath("$.[*].tekushiyPunkt").value(hasItem(DEFAULT_TEKUSHIY_PUNKT.toString())))
            .andExpect(jsonPath("$.[*].naznacheniyPunkt").value(hasItem(DEFAULT_NAZNACHENIY_PUNKT.toString())))
            .andExpect(jsonPath("$.[*].konechniyPunkt").value(hasItem(DEFAULT_KONECHNIY_PUNKT.toString())))
            .andExpect(jsonPath("$.[*].klient").value(hasItem(DEFAULT_KLIENT.toString())))
            .andExpect(jsonPath("$.[*].telephoneKlienta").value(hasItem(DEFAULT_TELEPHONE_KLIENTA.toString())))
            .andExpect(jsonPath("$.[*].dlinaPuti").value(hasItem(DEFAULT_DLINA_PUTI)))
            .andExpect(jsonPath("$.[*].dataPribitiya").value(hasItem(sameInstant(DEFAULT_DATA_PRIBITIYA))))
            .andExpect(jsonPath("$.[*].dataOtpravki").value(hasItem(sameInstant(DEFAULT_DATA_OTPRAVKI))))
            .andExpect(jsonPath("$.[*].prioritet").value(hasItem(DEFAULT_PRIORITET.toString())))
            .andExpect(jsonPath("$.[*].vremyaPuti").value(hasItem(DEFAULT_VREMYA_PUTI)))
            .andExpect(jsonPath("$.[*].status").value(hasItem(DEFAULT_STATUS.toString())))
            .andExpect(jsonPath("$.[*].opisanie").value(hasItem(DEFAULT_OPISANIE.toString())))
            .andExpect(jsonPath("$.[*].chrupkiy").value(hasItem(DEFAULT_CHRUPKIY.booleanValue())))
            .andExpect(jsonPath("$.[*].otvetstveniy").value(hasItem(DEFAULT_OTVETSTVENIY.toString())))
            .andExpect(jsonPath("$.[*].telephoneOtv").value(hasItem(DEFAULT_TELEPHONE_OTV.toString())));
    }
    
    @Test
    @Transactional
    public void getCargo() throws Exception {
        // Initialize the database
        cargoRepository.saveAndFlush(cargo);

        // Get the cargo
        restCargoMockMvc.perform(get("/api/cargos/{id}", cargo.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(cargo.getId().intValue()))
            .andExpect(jsonPath("$.iDCargo").value(DEFAULT_I_D_CARGO.toString()))
            .andExpect(jsonPath("$.iDNakladnoy").value(DEFAULT_I_D_NAKLADNOY))
            .andExpect(jsonPath("$.iDGruza").value(DEFAULT_I_D_GRUZA.toString()))
            .andExpect(jsonPath("$.massa").value(DEFAULT_MASSA))
            .andExpect(jsonPath("$.tekushiyPunkt").value(DEFAULT_TEKUSHIY_PUNKT.toString()))
            .andExpect(jsonPath("$.naznacheniyPunkt").value(DEFAULT_NAZNACHENIY_PUNKT.toString()))
            .andExpect(jsonPath("$.konechniyPunkt").value(DEFAULT_KONECHNIY_PUNKT.toString()))
            .andExpect(jsonPath("$.klient").value(DEFAULT_KLIENT.toString()))
            .andExpect(jsonPath("$.telephoneKlienta").value(DEFAULT_TELEPHONE_KLIENTA.toString()))
            .andExpect(jsonPath("$.dlinaPuti").value(DEFAULT_DLINA_PUTI))
            .andExpect(jsonPath("$.dataPribitiya").value(sameInstant(DEFAULT_DATA_PRIBITIYA)))
            .andExpect(jsonPath("$.dataOtpravki").value(sameInstant(DEFAULT_DATA_OTPRAVKI)))
            .andExpect(jsonPath("$.prioritet").value(DEFAULT_PRIORITET.toString()))
            .andExpect(jsonPath("$.vremyaPuti").value(DEFAULT_VREMYA_PUTI))
            .andExpect(jsonPath("$.status").value(DEFAULT_STATUS.toString()))
            .andExpect(jsonPath("$.opisanie").value(DEFAULT_OPISANIE.toString()))
            .andExpect(jsonPath("$.chrupkiy").value(DEFAULT_CHRUPKIY.booleanValue()))
            .andExpect(jsonPath("$.otvetstveniy").value(DEFAULT_OTVETSTVENIY.toString()))
            .andExpect(jsonPath("$.telephoneOtv").value(DEFAULT_TELEPHONE_OTV.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingCargo() throws Exception {
        // Get the cargo
        restCargoMockMvc.perform(get("/api/cargos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateCargo() throws Exception {
        // Initialize the database
        cargoRepository.saveAndFlush(cargo);

        int databaseSizeBeforeUpdate = cargoRepository.findAll().size();

        // Update the cargo
        Cargo updatedCargo = cargoRepository.findById(cargo.getId()).get();
        // Disconnect from session so that the updates on updatedCargo are not directly saved in db
        em.detach(updatedCargo);
        updatedCargo
            .iDCargo(UPDATED_I_D_CARGO)
            .iDNakladnoy(UPDATED_I_D_NAKLADNOY)
            .iDGruza(UPDATED_I_D_GRUZA)
            .massa(UPDATED_MASSA)
            .tekushiyPunkt(UPDATED_TEKUSHIY_PUNKT)
            .naznacheniyPunkt(UPDATED_NAZNACHENIY_PUNKT)
            .konechniyPunkt(UPDATED_KONECHNIY_PUNKT)
            .klient(UPDATED_KLIENT)
            .telephoneKlienta(UPDATED_TELEPHONE_KLIENTA)
            .dlinaPuti(UPDATED_DLINA_PUTI)
            .dataPribitiya(UPDATED_DATA_PRIBITIYA)
            .dataOtpravki(UPDATED_DATA_OTPRAVKI)
            .prioritet(UPDATED_PRIORITET)
            .vremyaPuti(UPDATED_VREMYA_PUTI)
            .status(UPDATED_STATUS)
            .opisanie(UPDATED_OPISANIE)
            .chrupkiy(UPDATED_CHRUPKIY)
            .otvetstveniy(UPDATED_OTVETSTVENIY)
            .telephoneOtv(UPDATED_TELEPHONE_OTV);

        restCargoMockMvc.perform(put("/api/cargos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedCargo)))
            .andExpect(status().isOk());

        // Validate the Cargo in the database
        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeUpdate);
        Cargo testCargo = cargoList.get(cargoList.size() - 1);
        assertThat(testCargo.getiDCargo()).isEqualTo(UPDATED_I_D_CARGO);
        assertThat(testCargo.getiDNakladnoy()).isEqualTo(UPDATED_I_D_NAKLADNOY);
        assertThat(testCargo.getiDGruza()).isEqualTo(UPDATED_I_D_GRUZA);
        assertThat(testCargo.getMassa()).isEqualTo(UPDATED_MASSA);
        assertThat(testCargo.getTekushiyPunkt()).isEqualTo(UPDATED_TEKUSHIY_PUNKT);
        assertThat(testCargo.getNaznacheniyPunkt()).isEqualTo(UPDATED_NAZNACHENIY_PUNKT);
        assertThat(testCargo.getKonechniyPunkt()).isEqualTo(UPDATED_KONECHNIY_PUNKT);
        assertThat(testCargo.getKlient()).isEqualTo(UPDATED_KLIENT);
        assertThat(testCargo.getTelephoneKlienta()).isEqualTo(UPDATED_TELEPHONE_KLIENTA);
        assertThat(testCargo.getDlinaPuti()).isEqualTo(UPDATED_DLINA_PUTI);
        assertThat(testCargo.getDataPribitiya()).isEqualTo(UPDATED_DATA_PRIBITIYA);
        assertThat(testCargo.getDataOtpravki()).isEqualTo(UPDATED_DATA_OTPRAVKI);
        assertThat(testCargo.getPrioritet()).isEqualTo(UPDATED_PRIORITET);
        assertThat(testCargo.getVremyaPuti()).isEqualTo(UPDATED_VREMYA_PUTI);
        assertThat(testCargo.getStatus()).isEqualTo(UPDATED_STATUS);
        assertThat(testCargo.getOpisanie()).isEqualTo(UPDATED_OPISANIE);
        assertThat(testCargo.isChrupkiy()).isEqualTo(UPDATED_CHRUPKIY);
        assertThat(testCargo.getOtvetstveniy()).isEqualTo(UPDATED_OTVETSTVENIY);
        assertThat(testCargo.getTelephoneOtv()).isEqualTo(UPDATED_TELEPHONE_OTV);
    }

    @Test
    @Transactional
    public void updateNonExistingCargo() throws Exception {
        int databaseSizeBeforeUpdate = cargoRepository.findAll().size();

        // Create the Cargo

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCargoMockMvc.perform(put("/api/cargos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        // Validate the Cargo in the database
        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteCargo() throws Exception {
        // Initialize the database
        cargoRepository.saveAndFlush(cargo);

        int databaseSizeBeforeDelete = cargoRepository.findAll().size();

        // Delete the cargo
        restCargoMockMvc.perform(delete("/api/cargos/{id}", cargo.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database is empty
        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Cargo.class);
        Cargo cargo1 = new Cargo();
        cargo1.setId(1L);
        Cargo cargo2 = new Cargo();
        cargo2.setId(cargo1.getId());
        assertThat(cargo1).isEqualTo(cargo2);
        cargo2.setId(2L);
        assertThat(cargo1).isNotEqualTo(cargo2);
        cargo1.setId(null);
        assertThat(cargo1).isNotEqualTo(cargo2);
    }
}
