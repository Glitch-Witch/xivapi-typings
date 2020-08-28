
export namespace HugeCraftworksRankIndexNS {
  export type HugeCraftworksRankIndex = {
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

export type Index = HugeCraftworksRankIndexNS.HugeCraftworksRankIndex;

export namespace HugeCraftworksRankNS {
  export type HugeCraftworksRank = {
    CrafterLevel:     number;
    ExpRewardPerItem: number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type HugeCraftworksRank = HugeCraftworksRankNS.HugeCraftworksRank;
