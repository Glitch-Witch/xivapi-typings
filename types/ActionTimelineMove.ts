
export namespace ActionTimelineMoveIndexNS {
  export type ActionTimelineMoveIndex = {
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

export type Index = ActionTimelineMoveIndexNS.ActionTimelineMoveIndex;

export namespace ActionTimelineMoveNS {
  export type ActionTimelineMove = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    BNpcBase: BNpcBase;
  }
  
  export type BNpcBase = {
    ActionTimelineMove: number[];
  }
  
}

export type ActionTimelineMove = ActionTimelineMoveNS.ActionTimelineMove;
