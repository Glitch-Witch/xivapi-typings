export interface InstanceContentBuffIndex {
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


export interface InstanceContentBuff1 {
  EchoDeath:        number;
  EchoStart:        number;
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Url:              string;
}

export interface GameContentLinks {
  InstanceContent: InstanceContent;
}

export interface InstanceContent {
  InstanceContentBuff: number[];
}