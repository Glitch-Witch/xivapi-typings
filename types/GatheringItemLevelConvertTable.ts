export interface GatheringItemLevelConvertTableIndex {
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


export interface GatheringItemLevelConvertTable1 {
  GameContentLinks:   GameContentLinks;
  GatheringItemLevel: number;
  ID:                 number;
  Patch:              null;
  Stars:              number;
  Url:                string;
}

export interface GameContentLinks {
  FishParameter: FishParameter;
  GatheringItem: FishParameter;
}

export interface FishParameter {
  GatheringItemLevel: number[];
}
