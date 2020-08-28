
export namespace ContentMemberTypeIndexNS {
  export type ContentMemberTypeIndex = {
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

export type Index = ContentMemberTypeIndexNS.ContentMemberTypeIndex;

export namespace ContentMemberTypeNS {
  export type ContentMemberType = {
    GameContentLinks: GameContentLinks;
    HealersPerParty:  number;
    ID:               number;
    MeleesPerParty:   number;
    Patch:            null;
    RangedPerParty:   number;
    TanksPerParty:    number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    ContentFinderCondition: Content;
    ContentRoulette:        Content;
  }
  
  export type Content = {
    ContentMemberType: number[];
  }
  
}

export type ContentMemberType = ContentMemberTypeNS.ContentMemberType;
