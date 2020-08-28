
export namespace AirshipExplorationPointIndexNS {
  export type AirshipExplorationPointIndex = {
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

export type Index = AirshipExplorationPointIndexNS.AirshipExplorationPointIndex;

export namespace AirshipExplorationPointNS {
  export type AirshipExplorationPoint = {
    DurationMin:          number;
    ExpReward:            number;
    GameContentLinks:     any[];
    ID:                   number;
    Name:                 string;
    NameShort:            string;
    NameShort_de:         string;
    NameShort_en:         string;
    NameShort_fr:         string;
    NameShort_ja:         string;
    Name_de:              string;
    Name_en:              string;
    Name_fr:              string;
    Name_ja:              string;
    Patch:                null;
    RequiredFuel:         number;
    RequiredLevel:        number;
    RequiredSurveillance: number;
    Url:                  string;
  }
  
}

export type AirshipExplorationPoint = AirshipExplorationPointNS.AirshipExplorationPoint;
