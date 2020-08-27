export interface SubmarinePartIndex {
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


export interface SubmarinePart {
  Components:       number;
  Favor:            number;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Range:            string;
  Rank:             number;
  RepairMaterials:  number;
  Retrieval:        number;
  Slot:             number;
  Speed:            number;
  Surveillance:     number;
  Url:              string;
}
