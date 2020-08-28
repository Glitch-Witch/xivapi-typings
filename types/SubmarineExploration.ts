
export namespace SubmarineExplorationIndexNS {
  export type SubmarineExplorationIndex = {
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

export type Index = SubmarineExplorationIndexNS.SubmarineExplorationIndex;

export namespace SubmarineExplorationNS {
  export type SubmarineExploration = {
    CeruleumTankReq:   number;
    Destination:       string;
    Destination_de:    string;
    Destination_en:    string;
    Destination_fr:    string;
    Destination_ja:    string;
    DistanceForSurvey: number;
    DurationMin:       number;
    ExpReward:         number;
    GameContentLinks:  any[];
    GamePatch:         GamePatch;
    ID:                number;
    Location:          string;
    Location_de:       string;
    Location_en:       string;
    Location_fr:       string;
    Location_ja:       string;
    Patch:             number;
    RankReq:           number;
    Url:               string;
  }
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    Name:          string;
    Name_cn:       string;
    Name_de:       string;
    Name_en:       string;
    Name_fr:       string;
    Name_ja:       string;
    Name_kr:       string;
    PatchNotes:    string;
    PatchNotes_de: string;
    PatchNotes_en: string;
    PatchNotes_fr: string;
    PatchNotes_ja: string;
    ReleaseDate:   number;
    Version:       string;
  }
  
}

export type SubmarineExploration = SubmarineExplorationNS.SubmarineExploration;
