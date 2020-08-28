
export namespace PvPRankIndexNS {
  export type PVPRankIndex = {
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

export type Index = PvPRankIndexNS.PVPRankIndex;

export namespace PvPRankNS {
  export type PVPRank = {
    ExpRequired:      number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }

}

export type PvPRank = PvPRankNS.PVPRank;
