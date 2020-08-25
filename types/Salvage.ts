export interface SalvageIndex {
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


export interface Salvage1 {
  GameContentLinks: GameContentLinks;
  ID:               number;
  OptimalSkill:     number;
  Patch:            null;
  Url:              string;
}

export interface GameContentLinks {
  Item: Item;
}

export interface Item {
  Salvage: number[];
}
