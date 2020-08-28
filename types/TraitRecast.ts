
export namespace TraitRecastIndexNS {
  export type TraitRecastIndex = {
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

export type Index = TraitRecastIndexNS.TraitRecastIndex;

export namespace TraitRecastNS {
  export type TraitRecast = {
    Action:           null;
    ActionTarget:     string;
    ActionTargetID:   number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    TimeDs:           number;
    Trait:            null;
    TraitTarget:      string;
    TraitTargetID:    number;
    Url:              string;
  }
  
}

export type TraitRecast = TraitRecastNS.TraitRecast;
