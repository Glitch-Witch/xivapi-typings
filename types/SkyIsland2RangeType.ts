
export namespace SkyIsland2RangeTypeIndexNS {
  export type SkyIslandRangeTypeIndex = {
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

export type Index = SkyIsland2RangeTypeIndexNS.SkyIslandRangeTypeIndex;

export namespace SkyIsland2RangeTypeNS {
  export type SkyIslandRangeType = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Type:             number;
    Url:              string;
  }

}

export type SkyIsland2RangeType = SkyIsland2RangeTypeNS.SkyIslandRangeType;
