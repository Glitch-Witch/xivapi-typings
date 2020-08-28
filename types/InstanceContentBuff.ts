
export namespace InstanceContentBuffIndexNS {
  export type InstanceContentBuffIndex = {
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

export type Index = InstanceContentBuffIndexNS.InstanceContentBuffIndex;

export namespace InstanceContentBuffNS {
  export type InstanceContentBuff = {
    EchoDeath:        number;
    EchoStart:        number;
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    InstanceContent: InstanceContent;
  }
  
  export type InstanceContent = {
    InstanceContentBuff: number[];
  }
  
}

export type InstanceContentBuff = InstanceContentBuffNS.InstanceContentBuff;
