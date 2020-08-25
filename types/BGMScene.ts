export interface BGMSceneIndex {
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


export interface BGMScene1 {
  EnableDisableRestart: number;
  EnablePassEnd:        number;
  ForceAutoReset:       number;
  GameContentLinks:     any[];
  ID:                   number;
  IgnoreBattle:         number;
  Patch:                null;
  Resume:               number;
  Url:                  string;
}
