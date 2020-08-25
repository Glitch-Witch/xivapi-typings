export interface TripleTriadCardResidentIndex {
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


export interface TripleTriadCardResident1 {
  Bottom:                        number;
  GameContentLinks:              any[];
  ID:                            number;
  Left:                          number;
  Patch:                         null;
  Right:                         number;
  SaleValue:                     number;
  SortKey:                       number;
  Top:                           number;
  TripleTriadCardRarity:         TripleTriadCardRarity;
  TripleTriadCardRarityTarget:   string;
  TripleTriadCardRarityTargetID: number;
  TripleTriadCardType:           null;
  TripleTriadCardTypeTarget:     string;
  TripleTriadCardTypeTargetID:   number;
  Url:                           string;
}

export interface TripleTriadCardRarity {
  ID:    number;
  Stars: number;
}
