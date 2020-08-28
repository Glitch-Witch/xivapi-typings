
export namespace RetainerTaskParameterIndexNS {
  export type RetainerTaskParameterIndex = {
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

export type Index = RetainerTaskParameterIndexNS.RetainerTaskParameterIndex;

export namespace RetainerTaskParameterNS {
  export type RetainerTaskParameter = {
    GameContentLinks: GameContentLinks;
    GatheringDoL0:    number;
    GatheringDoL1:    number;
    GatheringFSH0:    number;
    GatheringFSH1:    number;
    ID:               number;
    ItemLevelDoW0:    number;
    ItemLevelDoW1:    number;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    RetainerTask: RetainerTask;
  }
  
  export type RetainerTask = {
    RetainerTaskParameter: number[];
  }
  
}

export type RetainerTaskParameter = RetainerTaskParameterNS.RetainerTaskParameter;
