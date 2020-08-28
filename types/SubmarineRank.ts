
export namespace SubmarineRankIndexNS {
  export type SubmarineRankIndex = {
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

export type Index = SubmarineRankIndexNS.SubmarineRankIndex;

export namespace SubmarineRankNS {
  export type SubmarineRank = {
    ExpToNext:        number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Rank:             number;
    Url:              string;
  }
  
}

export type SubmarineRank = SubmarineRankNS.SubmarineRank;
