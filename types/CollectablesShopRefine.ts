export interface CollectablesShopRefineIndex {
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


export interface CollectablesShopRefine1 {
  GameContentLinks:   any[];
  HighCollectability: number;
  ID:                 number;
  LowCollectability:  number;
  MidCollectability:  number;
  Patch:              null;
  Url:                string;
}
