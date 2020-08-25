export interface AchievementHideConditionIndex {
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


export interface AchievementHideCondition1 {
  GameContentLinks: GameContentLinks;
  HideAchievement:  number;
  HideConditions:   number;
  HideName:         number;
  ID:               number;
  Patch:            null;
  Url:              string;
}

export interface GameContentLinks {
  Achievement: Achievement;
}

export interface Achievement {
  AchievementHideCondition: number[];
}
