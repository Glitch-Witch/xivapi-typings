
export namespace FCReputationIndexNS {
  export type FCReputationIndex = {
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

export type Index = FCReputationIndexNS.FCReputationIndex;

export namespace FCReputationNS {
  export type FCReputation = {
    Color:            Color;
    ColorTarget:      string;
    ColorTargetID:    number;
    DiscountRate:     number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            number;
    PointsToNext:     number;
    RequiredPoints:   number;
    Url:              string;
  }
  
  export type Color = {
    ID:           number;
    UIForeground: string;
    UIGlow:       number;
  }
  
  export type GamePatch = {
    Banner:      string;
    ExName:      string;
    ExVersion:   number;
    ID:          number;
    Name:        string;
    Name_cn:     string;
    Name_de:     string;
    Name_en:     string;
    Name_fr:     string;
    Name_ja:     string;
    Name_kr:     string;
    ReleaseDate: number;
    Version:     string;
  }
  
}

export type FCReputation = FCReputationNS.FCReputation;
