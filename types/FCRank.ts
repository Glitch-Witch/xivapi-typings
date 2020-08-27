export interface FCRankIndex {
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


export interface FCRank {
  CurrentPoint:      number;
  FCActionActiveNum: number;
  FCActionStockNum:  number;
  GameContentLinks:  GameContentLinks;
  ID:                number;
  NextPoint:         number;
  Patch:             null;
  Rights:            number;
  Url:               string;
}

export interface GameContentLinks {
  FCRights: FCRights;
}

export interface FCRights {
  FCRank: number[];
}
