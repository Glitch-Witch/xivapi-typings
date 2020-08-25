export interface SubmarineRankIndex {
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


export interface SubmarineRank1 {
  ExpToNext:        number;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Rank:             number;
  Url:              string;
}
