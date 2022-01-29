import { Moment } from 'moment';

export const enum Prioritet {
  VISOKIY = 'VISOKIY',
  SREDNIY = 'SREDNIY',
  NIZKIY = 'NIZKIY'
}

export const enum Status {
  NOVAYA = 'NOVAYA',
  VIPOLNYAETSA = 'VIPOLNYAETSA',
  VIPOLNENO = 'VIPOLNENO'
}

export interface ICargo {
  id?: number;
  iDCargo?: string;
  iDNakladnoy?: number;
  iDGruza?: string;
  massa?: number;
  tekushiyPunkt?: string;
  naznacheniyPunkt?: string;
  konechniyPunkt?: string;
  klient?: string;
  telephoneKlienta?: string;
  dlinaPuti?: number;
  dataPribitiya?: Moment;
  dataOtpravki?: Moment;
  prioritet?: Prioritet;
  vremyaPuti?: number;
  status?: Status;
  opisanie?: string;
  chrupkiy?: boolean;
  otvetstveniy?: string;
  telephoneOtv?: string;
}

export const defaultValue: Readonly<ICargo> = {
  chrupkiy: false
};
