export interface EquipRaceCategoryIndex {
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


export interface EquipRaceCategory {
  AuRa:             number;
  Elezen:           number;
  Female:           number;
  GameContentLinks: any[];
  Hyur:             number;
  ID:               number;
  Lalafell:         number;
  Male:             number;
  "Miqo'te":        number;
  Patch:            null;
  Roegadyn:         number;
  Url:              string;
}
