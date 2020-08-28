
export namespace PvPTraitIndexNS {
  export type PVPTraitIndex = {
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

export type Index = PvPTraitIndexNS.PVPTraitIndex;

export namespace PvPTraitNS {
  export type PVPTrait = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Trait1:           null;
    Trait1Target:     string;
    Trait1TargetID:   number;
    Trait2:           null;
    Trait2Target:     string;
    Trait2TargetID:   number;
    Trait3:           null;
    Trait3Target:     string;
    Trait3TargetID:   number;
    Url:              string;
  }

}

export type PvPTrait = PvPTraitNS.PVPTrait;
