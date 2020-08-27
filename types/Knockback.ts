export interface KnockbackIndex {
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


export interface Knockback {
  CancelMove:       number;
  Direction:        number;
  DirectionArg:     number;
  Distance:         number;
  GameContentLinks: any[];
  ID:               number;
  Motion:           number;
  NearDistance:     number;
  Patch:            null;
  Speed:            number;
  Url:              string;
}
