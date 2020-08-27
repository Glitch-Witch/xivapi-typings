export interface TraitRecastIndex {
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


export interface TraitRecast {
  Action:           null;
  ActionTarget:     string;
  ActionTargetID:   number;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  TimeDs:           number;
  Trait:            null;
  TraitTarget:      string;
  TraitTargetID:    number;
  Url:              string;
}
