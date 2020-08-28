
export namespace AirshipExplorationPartIndexNS {
  export type AirshipExplorationPartIndex = {
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

export type Index = AirshipExplorationPartIndexNS.AirshipExplorationPartIndex;

export namespace AirshipExplorationPartNS {
  export type AirshipExplorationPart = {
    Components:       number;
    Favor:            string;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Range:            number;
    Rank:             number;
    RepairMaterials:  number;
    Retrieval:        number;
    Speed:            number;
    Surveillance:     number;
    Url:              string;
  }
  
}

export type AirshipExplorationPart = AirshipExplorationPartNS.AirshipExplorationPart;
