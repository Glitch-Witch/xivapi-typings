export interface ContentRouletteOpenRuleIndex {
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


export interface ContentRouletteOpenRule {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Type:             number;
  Url:              string;
}

export interface GameContentLinks {
  ContentRoulette: ContentRoulette;
}

export interface ContentRoulette {
  OpenRule: number[];
}
