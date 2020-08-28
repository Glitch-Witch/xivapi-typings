
export namespace GatheringPointTransientIndexNS {
  export type GatheringPointTransientIndex = {
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

export type Index = GatheringPointTransientIndexNS.GatheringPointTransientIndex;

export namespace GatheringPointTransientNS {
  export type GatheringPointTransient = {
    EphemeralEndTime:                  number;
    EphemeralStartTime:                number;
    GameContentLinks:                  any[];
    GamePatch:                         GamePatch;
    GatheringRarePopTimeTable:         null;
    GatheringRarePopTimeTableTarget:   string;
    GatheringRarePopTimeTableTargetID: number;
    ID:                                number;
    Patch:                             number;
    Url:                               string;
  }
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    IsExpansion:   boolean;
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
    Url:           string;
    Version:       string;
  }
  
}

export type GatheringPointTransient = GatheringPointTransientNS.GatheringPointTransient;
