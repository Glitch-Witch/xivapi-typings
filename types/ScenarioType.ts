export interface ScenarioTypeIndex {
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


export interface ScenarioType {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Type:             string;
  Type_de:          string;
  Type_en:          string;
  Type_fr:          string;
  Type_ja:          string;
  Url:              string;
}

export interface GameContentLinks {
  ScenarioTree: ScenarioTree;
}

export interface ScenarioTree {
  Type: number[];
}
