export interface ItemActionIndex {
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


export interface ItemAction1 {
  CondBattle:       number;
  CondLv:           number;
  CondPVP:          number;
  CondPVPOnly:      number;
  Data0:            number;
  Data1:            number;
  Data2:            number;
  Data3:            number;
  Data4:            number;
  Data5:            number;
  Data6:            number;
  Data7:            number;
  Data8:            number;
  DataHQ0:          number;
  DataHQ1:          number;
  DataHQ2:          number;
  DataHQ3:          number;
  DataHQ4:          number;
  DataHQ5:          number;
  DataHQ6:          number;
  DataHQ7:          number;
  DataHQ8:          number;
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Type:             number;
  Url:              string;
}

export interface GameContentLinks {
  Item: Item;
}

export interface Item {
  ItemAction: number[];
}
