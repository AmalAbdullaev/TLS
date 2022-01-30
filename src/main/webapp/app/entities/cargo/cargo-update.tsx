import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './cargo.reducer';
import { ICargo } from 'app/shared/model/cargo.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICargoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ICargoUpdateState {
  isNew: boolean;
}

export class CargoUpdate extends React.Component<ICargoUpdateProps, ICargoUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }
  }

  saveEntity = (event, errors, values) => {
    values.dataPribitiya = convertDateTimeToServer(values.dataPribitiya);
    values.dataOtpravki = convertDateTimeToServer(values.dataOtpravki);

    if (errors.length === 0) {
      const { cargoEntity } = this.props;
      const entity = {
        ...cargoEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/cargo');
  };

  render() {
    const { cargoEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="tlsApp.cargo.home.createOrEditLabel">
              <Translate contentKey="tlsApp.cargo.home.createOrEditLabel">Create or edit a Cargo</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : cargoEntity} onSubmit={this.saveEntity}>
                <AvGroup>
                  <Label id="iDCargoLabel" for="cargo-iDCargo">
                    <Translate contentKey="tlsApp.cargo.iDCargo">I D Cargo</Translate>
                  </Label>
                  <AvField
                    id="cargo-iDCargo"
                    type="text"
                    name="iDCargo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      minLength: { value: 10, errorMessage: translate('entity.validation.minlength', { min: 10 }) },
                      maxLength: { value: 10, errorMessage: translate('entity.validation.maxlength', { max: 10 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="iDNakladnoyLabel" for="cargo-iDNakladnoy">
                    <Translate contentKey="tlsApp.cargo.iDNakladnoy">I D Nakladnoy</Translate>
                  </Label>
                  <AvField id="cargo-iDNakladnoy" type="string" className="form-control" name="iDNakladnoy" />
                </AvGroup>
                <AvGroup>
                  <Label id="iDGruzaLabel" for="cargo-iDGruza">
                    <Translate contentKey="tlsApp.cargo.iDGruza">I D Gruza</Translate>
                  </Label>
                  <AvField
                    id="cargo-iDGruza"
                    type="text"
                    name="iDGruza"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      minLength: { value: 10, errorMessage: translate('entity.validation.minlength', { min: 10 }) },
                      maxLength: { value: 10, errorMessage: translate('entity.validation.maxlength', { max: 10 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="massaLabel" for="cargo-massa">
                    <Translate contentKey="tlsApp.cargo.massa">Massa</Translate>
                  </Label>
                  <AvField id="cargo-massa" type="string" className="form-control" name="massa" />
                </AvGroup>
                <AvGroup>
                  <Label id="tekushiyPunktLabel" for="cargo-tekushiyPunkt">
                    <Translate contentKey="tlsApp.cargo.tekushiyPunkt">Tekushiy Punkt</Translate>
                  </Label>
                  <AvField id="cargo-tekushiyPunkt" type="text" name="tekushiyPunkt" />
                </AvGroup>
                <AvGroup>
                  <Label id="naznacheniyPunktLabel" for="cargo-naznacheniyPunkt">
                    <Translate contentKey="tlsApp.cargo.naznacheniyPunkt">Naznacheniy Punkt</Translate>
                  </Label>
                  <AvField id="cargo-naznacheniyPunkt" type="text" name="naznacheniyPunkt" />
                </AvGroup>
                <AvGroup>
                  <Label id="konechniyPunktLabel" for="cargo-konechniyPunkt">
                    <Translate contentKey="tlsApp.cargo.konechniyPunkt">Konechniy Punkt</Translate>
                  </Label>
                  <AvField id="cargo-konechniyPunkt" type="text" name="konechniyPunkt" />
                </AvGroup>
                <AvGroup>
                  <Label id="klientLabel" for="cargo-klient">
                    <Translate contentKey="tlsApp.cargo.klient">Klient</Translate>
                  </Label>
                  <AvField id="cargo-klient" type="text" name="klient" />
                </AvGroup>
                <AvGroup>
                  <Label id="telephoneKlientaLabel" for="cargo-telephoneKlienta">
                    <Translate contentKey="tlsApp.cargo.telephoneKlienta">Telephone Klienta</Translate>
                  </Label>
                  <AvField id="cargo-telephoneKlienta" type="text" name="telephoneKlienta" />
                </AvGroup>
                <AvGroup>
                  <Label id="dlinaPutiLabel" for="cargo-dlinaPuti">
                    <Translate contentKey="tlsApp.cargo.dlinaPuti">Dlina Puti</Translate>
                  </Label>
                  <AvField id="cargo-dlinaPuti" type="string" className="form-control" name="dlinaPuti" />
                </AvGroup>
                <AvGroup>
                  <Label id="dataPribitiyaLabel" for="cargo-dataPribitiya">
                    <Translate contentKey="tlsApp.cargo.dataPribitiya">Data Pribitiya</Translate>
                  </Label>
                  <AvInput
                    id="cargo-dataPribitiya"
                    type="datetime-local"
                    className="form-control"
                    name="dataPribitiya"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.cargoEntity.dataPribitiya)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="dataOtpravkiLabel" for="cargo-dataOtpravki">
                    <Translate contentKey="tlsApp.cargo.dataOtpravki">Data Otpravki</Translate>
                  </Label>
                  <AvInput
                    id="cargo-dataOtpravki"
                    type="datetime-local"
                    className="form-control"
                    name="dataOtpravki"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.cargoEntity.dataOtpravki)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="prioritetLabel" for="cargo-prioritet">
                    <Translate contentKey="tlsApp.cargo.prioritet">Prioritet</Translate>
                  </Label>
                  <AvInput
                    id="cargo-prioritet"
                    type="select"
                    className="form-control"
                    name="prioritet"
                    value={(!isNew && cargoEntity.prioritet) || 'VISOKIY'}
                  >
                    <option value="VISOKIY">ВЫСОКИЙ</option>
                    <option value="SREDNIY">CРЕДНИЙ</option>
                    <option value="NIZKIY">НИЗКИЙ</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="vremyaPutiLabel" for="cargo-vremyaPuti">
                    <Translate contentKey="tlsApp.cargo.vremyaPuti">Vremya Puti</Translate>
                  </Label>
                  <AvField id="cargo-vremyaPuti" type="string" className="form-control" name="vremyaPuti" />
                </AvGroup>
                <AvGroup>
                  <Label id="statusLabel" for="cargo-status">
                    <Translate contentKey="tlsApp.cargo.status">Status</Translate>
                  </Label>
                  <AvInput
                    id="cargo-status"
                    type="select"
                    className="form-control"
                    name="status"
                    value={(!isNew && cargoEntity.status) || 'NOVAYA'}
                  >
                    <option value="NOVAYA">НОВАЯ</option>
                    <option value="VIPOLNYAETSA">В ПРОЦЕССЕ</option>
                    <option value="VIPOLNENO">ВЫПОЛНЕНО</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="opisanieLabel" for="cargo-opisanie">
                    <Translate contentKey="tlsApp.cargo.opisanie">Opisanie</Translate>
                  </Label>
                  <AvField
                    id="cargo-opisanie"
                    type="text"
                    name="opisanie"
                    validate={{
                      maxLength: { value: 300, errorMessage: translate('entity.validation.maxlength', { max: 300 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="chrupkiyLabel" check>
                    <AvInput id="cargo-chrupkiy" type="checkbox" className="form-control" name="chrupkiy" />
                    <Translate contentKey="tlsApp.cargo.chrupkiy">Chrupkiy</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="otvetstveniyLabel" for="cargo-otvetstveniy">
                    <Translate contentKey="tlsApp.cargo.otvetstveniy">Otvetstveniy</Translate>
                  </Label>
                  <AvField id="cargo-otvetstveniy" type="text" name="otvetstveniy" />
                </AvGroup>
                <AvGroup>
                  <Label id="telephoneOtvLabel" for="cargo-telephoneOtv">
                    <Translate contentKey="tlsApp.cargo.telephoneOtv">Telephone Otv</Translate>
                  </Label>
                  <AvField id="cargo-telephoneOtv" type="text" name="telephoneOtv" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/cargo" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />
                  &nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />
                  &nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  cargoEntity: storeState.cargo.entity,
  loading: storeState.cargo.loading,
  updating: storeState.cargo.updating,
  updateSuccess: storeState.cargo.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CargoUpdate);
