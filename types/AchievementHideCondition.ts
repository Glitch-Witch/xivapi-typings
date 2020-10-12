
export namespace AchievementHideConditionIndexNS {
  export type AchievementHideConditionIndex = {
    Pagination: Pagination;
    Results:    Result[];
  }

  export type Pagination = {
    Page:           number;
    PageNext:       number;
    PagePrev:       number;
    PageTotal:      number;
    Results:        number;
    ResultsPerPage: number;
    ResultsTotal:   number;
  }

  export type Result = {
    ID:   number;
    Icon: null;
    Name: null;
    Url:  string;
  }

}

export type Index = AchievementHideConditionIndexNS.AchievementHideConditionIndex;

export namespace AchievementHideConditionNS {
  export type AchievementHideCondition = {
    GameContentLinks: GameContentLinks;
    HideAchievement:  number;
    HideConditions:   number;
    HideName:         number;
    ID:               number;
    Patch:            null;
    Url:              string;
  }

  export type GameContentLinks = {
    Achievement: Achievement;
  }

  export type Achievement = {
    AchievementHideCondition: number[];
  }

}

export type AchievementHideCondition = AchievementHideConditionNS.AchievementHideCondition;
