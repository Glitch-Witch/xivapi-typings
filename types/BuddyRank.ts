
export namespace BuddyRankIndexNS {
  export type BuddyRankIndex = {
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

export type Index = BuddyRankIndexNS.BuddyRankIndex;

export namespace BuddyRankNS {
  export type BuddyRank = {
    ExpRequired:      number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type BuddyRank = BuddyRankNS.BuddyRank;
