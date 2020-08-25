export interface MasterpieceSupplyMultiplierIndex {
  Pagination: Pagination;
  Results:    Result[];
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface Result {
  ID:   number;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface MasterpieceSupplyMultiplier1 {
  CurrencyMultiplier0: number;
  CurrencyMultiplier1: number;
  GameContentLinks:    GameContentLinks;
  ID:                  number;
  Patch:               null;
  Url:                 string;
  XpMultiplier0:       number;
  XpMultiplier1:       number;
}

export interface GameContentLinks {
  MasterpieceSupplyDuty: MasterpieceSupplyDuty;
}

export interface MasterpieceSupplyDuty {
  BonusMultiplier0: number[];
  BonusMultiplier1: number[];
  BonusMultiplier2: number[];
  BonusMultiplier3: number[];
  BonusMultiplier4: number[];
  BonusMultiplier5: number[];
  BonusMultiplier6: number[];
  BonusMultiplier7: number[];
}
