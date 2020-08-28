
export namespace GatheringPointBaseIndexNS {
  export type GatheringPointBaseIndex = {
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

export type Index = GatheringPointBaseIndexNS.GatheringPointBaseIndex;

export namespace GatheringPointBaseNS {
  export type GatheringPointBase = {
    GameContentLinks:      any[];
    GatheringLevel:        number;
    GatheringType:         GatheringType;
    GatheringTypeTarget:   string;
    GatheringTypeTargetID: number;
    ID:                    number;
    IsLimited:             number;
    Item0:                 number;
    Item1:                 number;
    Item2:                 number;
    Item3:                 number;
    Item4:                 number;
    Item5:                 number;
    Item6:                 number;
    Item7:                 number;
    Patch:                 null;
    Url:                   string;
  }
  
  export type GatheringType = {
    ID:         number;
    IconMain:   string;
    IconMainID: number;
    IconOff:    string;
    IconOffID:  number;
    Name:       string;
    Name_de:    string;
    Name_en:    string;
    Name_fr:    string;
    Name_ja:    string;
  }
  
}

export type GatheringPointBase = GatheringPointBaseNS.GatheringPointBase;
