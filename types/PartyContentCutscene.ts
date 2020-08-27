export interface PartyContentCutsceneIndex {
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


export interface PartyContentCutscene {
  Cutscene:         Cutscene;
  CutsceneTarget:   string;
  CutsceneTargetID: number;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Url:              string;
}

export interface Cutscene {
  ID:      number;
  Path:    string;
  Path_en: string;
}
