
export namespace ScenarioTreeTipsQuestIndexNS {
  export type ScenarioTreeTipsQuestIndex = {
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

export type Index = ScenarioTreeTipsQuestIndexNS.ScenarioTreeTipsQuestIndex;

export namespace ScenarioTreeTipsQuestNS {
  export type ScenarioTreeTipsQuest = {
    GameContentLinks: any[];
    ID:               number;
    Level:            null;
    LevelTarget:      string;
    LevelTargetID:    number;
    Patch:            null;
    Url:              string;
  }
  
}

export type ScenarioTreeTipsQuest = ScenarioTreeTipsQuestNS.ScenarioTreeTipsQuest;
