
export namespace CutsceneWorkIndexIndexNS {
  export type CutsceneWorkIndexIndex = {
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

export type Index = CutsceneWorkIndexIndexNS.CutsceneWorkIndexIndex;

export namespace CutsceneWorkIndexNS {
  export type CutsceneWorkIndex = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
    WorkIndex:        number;
  }
  
}

export type CutsceneWorkIndex = CutsceneWorkIndexNS.CutsceneWorkIndex;
