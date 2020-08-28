
export namespace RetainerTaskLvRangeIndexNS {
  export type RetainerTaskLVRangeIndex = {
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

export type Index = RetainerTaskLvRangeIndexNS.RetainerTaskLVRangeIndex;

export namespace RetainerTaskLvRangeNS {
  export type RetainerTaskLVRange = {
    GameContentLinks: any[];
    ID:               number;
    Max:              number;
    Min:              number;
    Patch:            null;
    Url:              string;
  }

}

export type RetainerTaskLvRange = RetainerTaskLvRangeNS.RetainerTaskLVRange;
