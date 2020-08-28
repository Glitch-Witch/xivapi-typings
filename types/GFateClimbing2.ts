
export namespace GFateClimbing2IndexNS {
  export type GFateClimbingIndex = {
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

export type Index = GFateClimbing2IndexNS.GFateClimbingIndex;

export namespace GFateClimbing2NS {
  export type GFateClimbing = {
    ContentEntry:         ContentEntry;
    ContentEntryTarget:   string;
    ContentEntryTargetID: number;
    GameContentLinks:     any[];
    ID:                   number;
    Patch:                null;
    Url:                  string;
  }

  export type ContentEntry = {
    ID: number;
  }

}

export type GFateClimbing2 = GFateClimbing2NS.GFateClimbing;
