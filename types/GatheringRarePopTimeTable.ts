export interface GatheringRarePopTimeTableIndex {
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


export interface GatheringRarePopTimeTable {
  DurationM0:       number;
  DurationM1:       number;
  DurationM2:       number;
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  StartTime0:       number;
  StartTime1:       number;
  StartTime2:       number;
  Url:              string;
}

export interface GameContentLinks {
  GatheringPointTransient: GatheringPointTransient;
}

export interface GatheringPointTransient {
  GatheringRarePopTimeTable: number[];
}
