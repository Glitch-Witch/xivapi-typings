
export namespace GatheringTypeIndexNS {
  export type GatheringTypeIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = GatheringTypeIndexNS.GatheringTypeIndex;

export namespace GatheringTypeNS {
  export type GatheringType = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    IconMain:         string;
    IconMainID:       number;
    IconOff:          string;
    IconOffID:        number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    GatheringPointBase:   Gathering;
    GatheringSubCategory: Gathering;
  }
  
  export type Gathering = {
    GatheringType: number[];
  }
  
}

export type GatheringType = GatheringTypeNS.GatheringType;
