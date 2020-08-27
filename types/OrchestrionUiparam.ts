export interface OrchestrionUiparamIndex {
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


export interface OrchestrionUiparam {
  GameContentLinks:            any[];
  ID:                          number;
  OrchestrionCategory:         OrchestrionCategory;
  OrchestrionCategoryTarget:   string;
  OrchestrionCategoryTargetID: number;
  Order:                       number;
  Patch:                       null;
  Url:                         string;
}

export interface OrchestrionCategory {
  HideCategory: number;
  ID:           number;
  Name:         string;
  Name_de:      string;
  Name_en:      string;
  Name_fr:      string;
  Name_ja:      string;
  Order:        number;
}
