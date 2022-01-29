import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import {
  Translate,
  ICrudGetAllAction,
  TextFormat,
  getSortState,
  IPaginationBaseState,
  getPaginationItemsNumber,
  JhiPagination
} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './cargo.reducer';
import { ICargo } from 'app/shared/model/cargo.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface ICargoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type ICargoState = IPaginationBaseState;

export class Cargo extends React.Component<ICargoProps, ICargoState> {
  state: ICargoState = {
    ...getSortState(this.props.location, ITEMS_PER_PAGE)
  };

  componentDidMount() {
    this.getEntities();
  }

  sort = prop => () => {
    this.setState(
      {
        order: this.state.order === 'asc' ? 'desc' : 'asc',
        sort: prop
      },
      () => this.sortEntities()
    );
  };

  sortEntities() {
    this.getEntities();
    this.props.history.push(`${this.props.location.pathname}?page=${this.state.activePage}&sort=${this.state.sort},${this.state.order}`);
  }

  handlePagination = activePage => this.setState({ activePage }, () => this.sortEntities());

  getEntities = () => {
    const { activePage, itemsPerPage, sort, order } = this.state;
    this.props.getEntities(activePage - 1, itemsPerPage, `${sort},${order}`);
  };

  render() {
    const { cargoList, match, totalItems } = this.props;
    return (
      <div>
        <h2 id="cargo-heading">
          <Translate contentKey="tlsApp.cargo.home.title">Cargos</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="tlsApp.cargo.home.createLabel">Create new Cargo</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={this.sort('id')}>
                  <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('iDCargo')}>
                  <Translate contentKey="tlsApp.cargo.iDCargo">I D Cargo</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('iDNakladnoy')}>
                  <Translate contentKey="tlsApp.cargo.iDNakladnoy">I D Nakladnoy</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('iDGruza')}>
                  <Translate contentKey="tlsApp.cargo.iDGruza">I D Gruza</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('massa')}>
                  <Translate contentKey="tlsApp.cargo.massa">Massa</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('tekushiyPunkt')}>
                  <Translate contentKey="tlsApp.cargo.tekushiyPunkt">Tekushiy Punkt</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('naznacheniyPunkt')}>
                  <Translate contentKey="tlsApp.cargo.naznacheniyPunkt">Naznacheniy Punkt</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('konechniyPunkt')}>
                  <Translate contentKey="tlsApp.cargo.konechniyPunkt">Konechniy Punkt</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('klient')}>
                  <Translate contentKey="tlsApp.cargo.klient">Klient</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('telephoneKlienta')}>
                  <Translate contentKey="tlsApp.cargo.telephoneKlienta">Telephone Klienta</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('dlinaPuti')}>
                  <Translate contentKey="tlsApp.cargo.dlinaPuti">Dlina Puti</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('dataPribitiya')}>
                  <Translate contentKey="tlsApp.cargo.dataPribitiya">Data Pribitiya</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('dataOtpravki')}>
                  <Translate contentKey="tlsApp.cargo.dataOtpravki">Data Otpravki</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('prioritet')}>
                  <Translate contentKey="tlsApp.cargo.prioritet">Prioritet</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('vremyaPuti')}>
                  <Translate contentKey="tlsApp.cargo.vremyaPuti">Vremya Puti</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('status')}>
                  <Translate contentKey="tlsApp.cargo.status">Status</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('opisanie')}>
                  <Translate contentKey="tlsApp.cargo.opisanie">Opisanie</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('chrupkiy')}>
                  <Translate contentKey="tlsApp.cargo.chrupkiy">Chrupkiy</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('otvetstveniy')}>
                  <Translate contentKey="tlsApp.cargo.otvetstveniy">Otvetstveniy</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('telephoneOtv')}>
                  <Translate contentKey="tlsApp.cargo.telephoneOtv">Telephone Otv</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cargoList.map((cargo, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${cargo.id}`} color="link" size="sm">
                      {cargo.id}
                    </Button>
                  </td>
                  <td>{cargo.iDCargo}</td>
                  <td>{cargo.iDNakladnoy}</td>
                  <td>{cargo.iDGruza}</td>
                  <td>{cargo.massa}</td>
                  <td>{cargo.tekushiyPunkt}</td>
                  <td>{cargo.naznacheniyPunkt}</td>
                  <td>{cargo.konechniyPunkt}</td>
                  <td>{cargo.klient}</td>
                  <td>{cargo.telephoneKlienta}</td>
                  <td>{cargo.dlinaPuti}</td>
                  <td>
                    <TextFormat type="date" value={cargo.dataPribitiya} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={cargo.dataOtpravki} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <Translate contentKey={`tlsApp.Prioritet.${cargo.prioritet}`} />
                  </td>
                  <td>{cargo.vremyaPuti}</td>
                  <td>
                    <Translate contentKey={`tlsApp.Status.${cargo.status}`} />
                  </td>
                  <td>{cargo.opisanie}</td>
                  <td>{cargo.chrupkiy ? 'true' : 'false'}</td>
                  <td>{cargo.otvetstveniy}</td>
                  <td>{cargo.telephoneOtv}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${cargo.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${cargo.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${cargo.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Row className="justify-content-center">
          <JhiPagination
            items={getPaginationItemsNumber(totalItems, this.state.itemsPerPage)}
            activePage={this.state.activePage}
            onSelect={this.handlePagination}
            maxButtons={5}
          />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ cargo }: IRootState) => ({
  cargoList: cargo.entities,
  totalItems: cargo.totalItems
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cargo);
