export interface TripleTriadCardRarityIndex {
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


export interface TripleTriadCardRarity1 {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Stars:            number;
  Url:              string;
}

export interface GameContentLinks {
  TripleTriadCardResident: TripleTriadCardResident;
}

export interface TripleTriadCardResident {
  TripleTriadCardRarity: number[];
}
