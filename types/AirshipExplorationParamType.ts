
export namespace AirshipExplorationParamTypeIndexNS {
  export type AirshipExplorationParamTypeIndex = {
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

export type Index = AirshipExplorationParamTypeIndexNS.AirshipExplorationParamTypeIndex;

export namespace AirshipExplorationParamTypeNS {
  export type AirshipExplorationParamType = {
    GameContentLinks: any[];
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    Url:              string;
  }
  
}

export type AirshipExplorationParamType = AirshipExplorationParamTypeNS.AirshipExplorationParamType;
