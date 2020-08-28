
export namespace BehaviorPathIndexNS {
  export type BehaviorPathIndex = {
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

export type Index = BehaviorPathIndexNS.BehaviorPathIndex;

export namespace BehaviorPathNS {
  export type BehaviorPath = {
    GameContentLinks: any[];
    ID:               number;
    IsFadeIn:         number;
    IsFadeOut:        number;
    IsTurnTransition: number;
    IsWalking:        number;
    Patch:            null;
    Speed:            number;
    Url:              string;
  }
  
}

export type BehaviorPath = BehaviorPathNS.BehaviorPath;
