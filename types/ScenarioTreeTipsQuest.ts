export interface ScenarioTreeTipsQuestIndex {
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


export interface ScenarioTreeTipsQuest65536 {
  GameContentLinks: any[];
  ID:               number;
  Level:            null;
  LevelTarget:      string;
  LevelTargetID:    number;
  Patch:            null;
  Url:              string;
}
