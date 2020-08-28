
export namespace GatheringItemLevelConvertTableIndexNS {
  export type GatheringItemLevelConvertTableIndex = {
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

export type Index = GatheringItemLevelConvertTableIndexNS.GatheringItemLevelConvertTableIndex;

export namespace GatheringItemLevelConvertTableNS {
  export type GatheringItemLevelConvertTable = {
    GameContentLinks:   GameContentLinks;
    GatheringItemLevel: number;
    ID:                 number;
    Patch:              null;
    Stars:              number;
    Url:                string;
  }
  
  export type GameContentLinks = {
    FishParameter: FishParameter;
    GatheringItem: FishParameter;
  }
  
  export type FishParameter = {
    GatheringItemLevel: number[];
  }
  
}

export type GatheringItemLevelConvertTable = GatheringItemLevelConvertTableNS.GatheringItemLevelConvertTable;
