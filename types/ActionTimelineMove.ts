export interface ActionTimelineMoveIndex {
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


export interface ActionTimelineMove {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Url:              string;
}

export interface GameContentLinks {
  BNpcBase: BNpcBase;
}

export interface BNpcBase {
  ActionTimelineMove: number[];
}
