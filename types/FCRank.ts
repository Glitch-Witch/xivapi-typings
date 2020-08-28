
export namespace FCRankIndexNS {
  export type FCRankIndex = {
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

export type Index = FCRankIndexNS.FCRankIndex;

export namespace FCRankNS {
  export type FCRank = {
    CurrentPoint:      number;
    FCActionActiveNum: number;
    FCActionStockNum:  number;
    GameContentLinks:  GameContentLinks;
    ID:                number;
    NextPoint:         number;
    Patch:             null;
    Rights:            number;
    Url:               string;
  }
  
  export type GameContentLinks = {
    FCRights: FCRights;
  }
  
  export type FCRights = {
    FCRank: number[];
  }
  
}

export type FCRank = FCRankNS.FCRank;
