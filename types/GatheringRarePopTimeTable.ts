
export namespace GatheringRarePopTimeTableIndexNS {
  export type GatheringRarePopTimeTableIndex = {
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

export type Index = GatheringRarePopTimeTableIndexNS.GatheringRarePopTimeTableIndex;

export namespace GatheringRarePopTimeTableNS {
  export type GatheringRarePopTimeTable = {
    DurationM0:       number;
    DurationM1:       number;
    DurationM2:       number;
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    StartTime0:       number;
    StartTime1:       number;
    StartTime2:       number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    GatheringPointTransient: GatheringPointTransient;
  }
  
  export type GatheringPointTransient = {
    GatheringRarePopTimeTable: number[];
  }
  
}

export type GatheringRarePopTimeTable = GatheringRarePopTimeTableNS.GatheringRarePopTimeTable;
