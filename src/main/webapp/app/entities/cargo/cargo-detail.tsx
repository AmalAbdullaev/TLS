import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './cargo.reducer';
import { ICargo } from 'app/shared/model/cargo.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICargoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class CargoDetail extends React.Component<ICargoDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { cargoEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="tlsApp.cargo.detail.title">Cargo</Translate> [<b>{cargoEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="iDCargo">
                <Translate contentKey="tlsApp.cargo.iDCargo">I D Cargo</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.iDCargo}</dd>
            <dt>
              <span id="iDNakladnoy">
                <Translate contentKey="tlsApp.cargo.iDNakladnoy">I D Nakladnoy</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.iDNakladnoy}</dd>
            <dt>
              <span id="iDGruza">
                <Translate contentKey="tlsApp.cargo.iDGruza">I D Gruza</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.iDGruza}</dd>
            <dt>
              <span id="massa">
                <Translate contentKey="tlsApp.cargo.massa">Massa</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.massa}</dd>
            <dt>
              <span id="tekushiyPunkt">
                <Translate contentKey="tlsApp.cargo.tekushiyPunkt">Tekushiy Punkt</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.tekushiyPunkt}</dd>
            <dt>
              <span id="naznacheniyPunkt">
                <Translate contentKey="tlsApp.cargo.naznacheniyPunkt">Naznacheniy Punkt</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.naznacheniyPunkt}</dd>
            <dt>
              <span id="konechniyPunkt">
                <Translate contentKey="tlsApp.cargo.konechniyPunkt">Konechniy Punkt</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.konechniyPunkt}</dd>
            <dt>
              <span id="klient">
                <Translate contentKey="tlsApp.cargo.klient">Klient</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.klient}</dd>
            <dt>
              <span id="telephoneKlienta">
                <Translate contentKey="tlsApp.cargo.telephoneKlienta">Telephone Klienta</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.telephoneKlienta}</dd>
            <dt>
              <span id="dlinaPuti">
                <Translate contentKey="tlsApp.cargo.dlinaPuti">Dlina Puti</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.dlinaPuti}</dd>
            <dt>
              <span id="dataPribitiya">
                <Translate contentKey="tlsApp.cargo.dataPribitiya">Data Pribitiya</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={cargoEntity.dataPribitiya} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="dataOtpravki">
                <Translate contentKey="tlsApp.cargo.dataOtpravki">Data Otpravki</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={cargoEntity.dataOtpravki} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="prioritet">
                <Translate contentKey="tlsApp.cargo.prioritet">Prioritet</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.prioritet}</dd>
            <dt>
              <span id="vremyaPuti">
                <Translate contentKey="tlsApp.cargo.vremyaPuti">Vremya Puti</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.vremyaPuti}</dd>
            <dt>
              <span id="status">
                <Translate contentKey="tlsApp.cargo.status">Status</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.status}</dd>
            <dt>
              <span id="opisanie">
                <Translate contentKey="tlsApp.cargo.opisanie">Opisanie</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.opisanie}</dd>
            <dt>
              <span id="chrupkiy">
                <Translate contentKey="tlsApp.cargo.chrupkiy">Chrupkiy</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.chrupkiy ? 'true' : 'false'}</dd>
            <dt>
              <span id="otvetstveniy">
                <Translate contentKey="tlsApp.cargo.otvetstveniy">Otvetstveniy</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.otvetstveniy}</dd>
            <dt>
              <span id="telephoneOtv">
                <Translate contentKey="tlsApp.cargo.telephoneOtv">Telephone Otv</Translate>
              </span>
            </dt>
            <dd>{cargoEntity.telephoneOtv}</dd>
          </dl>
          <Button tag={Link} to="/entity/cargo" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/cargo/${cargoEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ cargo }: IRootState) => ({
  cargoEntity: cargo.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CargoDetail);
