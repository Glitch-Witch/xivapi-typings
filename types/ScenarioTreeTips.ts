
export namespace ScenarioTreeTipsIndexNS {
  export type ScenarioTreeTipsIndex = {
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

export type Index = ScenarioTreeTipsIndexNS.ScenarioTreeTipsIndex;

export namespace ScenarioTreeTipsNS {
  export type ScenarioTreeTips = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Tips1:            null;
    Tips1Target:      string;
    Tips1TargetID:    number;
    Tips2:            null;
    Tips2Target:      string;
    Tips2TargetID:    number;
    Url:              string;
  }
  
}

export type ScenarioTreeTips = ScenarioTreeTipsNS.ScenarioTreeTips;
