export interface AirshipExplorationPartIndex {
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


export interface AirshipExplorationPart1 {
  Components:       number;
  Favor:            string;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Range:            number;
  Rank:             number;
  RepairMaterials:  number;
  Retrieval:        number;
  Speed:            number;
  Surveillance:     number;
  Url:              string;
}
