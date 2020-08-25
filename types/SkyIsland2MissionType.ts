export interface SkyIsland2MissionTypeIndex {
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


export interface SkyIsland2MissionType1 {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Type:             number;
  Url:              string;
}

export interface GameContentLinks {
  SkyIsland2MissionDetail: SkyIsland2MissionDetail;
}

export interface SkyIsland2MissionDetail {
  Type: number[];
}
