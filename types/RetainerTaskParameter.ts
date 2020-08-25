export interface RetainerTaskParameterIndex {
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


export interface RetainerTaskParameter1 {
  GameContentLinks: GameContentLinks;
  GatheringDoL0:    number;
  GatheringDoL1:    number;
  GatheringFSH0:    number;
  GatheringFSH1:    number;
  ID:               number;
  ItemLevelDoW0:    number;
  ItemLevelDoW1:    number;
  Patch:            null;
  Url:              string;
}

export interface GameContentLinks {
  RetainerTask: RetainerTask;
}

export interface RetainerTask {
  RetainerTaskParameter: number[];
}
