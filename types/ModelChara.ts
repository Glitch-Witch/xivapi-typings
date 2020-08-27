export interface ModelCharaIndex {
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


export interface ModelChara {
  Base:             number;
  GameContentLinks: GameContentLinks;
  ID:               number;
  Model:            number;
  PapVariation:     number;
  Patch:            null;
  SEPack:           number;
  Type:             number;
  Url:              string;
  Variant:          number;
}

export interface GameContentLinks {
  BNpcBase: BNpcBase;
  ENpcBase: BNpcBase;
  Mount:    BNpcBase;
}

export interface BNpcBase {
  ModelChara: number[];
}
