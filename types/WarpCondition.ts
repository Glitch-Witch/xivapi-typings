export interface WarpConditionIndex {
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


export interface WarpCondition1 {
  ClassLevel:              number;
  CompleteParam:           number;
  DRequiredQuest3:         null;
  DRequiredQuest3Target:   string;
  DRequiredQuest3TargetID: number;
  GameContentLinks:        GameContentLinks;
  Gil:                     number;
  ID:                      number;
  Patch:                   null;
  QuestReward:             number;
  RequiredQuest1:          null;
  RequiredQuest1Target:    string;
  RequiredQuest1TargetID:  number;
  RequiredQuest2:          null;
  RequiredQuest2Target:    string;
  RequiredQuest2TargetID:  number;
  RequiredQuest4:          null;
  RequiredQuest4Target:    string;
  RequiredQuest4TargetID:  number;
  Url:                     string;
}

export interface GameContentLinks {
  Warp: Warp;
}

export interface Warp {
  WarpCondition: number[];
}
