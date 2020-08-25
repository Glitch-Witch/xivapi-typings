export interface TomestonesIndex {
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


export interface Tomestones1 {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Url:              string;
  WeeklyLimit:      number;
}

export interface GameContentLinks {
  TomestonesItem: TomestonesItem;
}

export interface TomestonesItem {
  Tomestones: number[];
}
