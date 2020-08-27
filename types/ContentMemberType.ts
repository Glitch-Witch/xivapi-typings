export interface ContentMemberTypeIndex {
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


export interface ContentMemberType {
  GameContentLinks: GameContentLinks;
  HealersPerParty:  number;
  ID:               number;
  MeleesPerParty:   number;
  Patch:            null;
  RangedPerParty:   number;
  TanksPerParty:    number;
  Url:              string;
}

export interface GameContentLinks {
  ContentFinderCondition: Content;
  ContentRoulette:        Content;
}

export interface Content {
  ContentMemberType: number[];
}
