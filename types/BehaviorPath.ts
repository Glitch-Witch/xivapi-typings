export interface BehaviorPathIndex {
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


export interface BehaviorPath1 {
  GameContentLinks: any[];
  ID:               number;
  IsFadeIn:         number;
  IsFadeOut:        number;
  IsTurnTransition: number;
  IsWalking:        number;
  Patch:            null;
  Speed:            number;
  Url:              string;
}
