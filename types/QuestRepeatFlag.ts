export interface QuestRepeatFlagIndex {
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


export interface QuestRepeatFlag {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Quest:            null;
  QuestTarget:      string;
  QuestTargetID:    number;
  Url:              string;
}

export interface GameContentLinks {
  Quest: Quest;
}

export interface Quest {
  QuestRepeatFlag: number[];
}
