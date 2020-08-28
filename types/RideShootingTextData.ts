
export namespace RideShootingTextDataIndexNS {
  export type RideShootingTextDataIndex = {
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

export type Index = RideShootingTextDataIndexNS.RideShootingTextDataIndex;

export namespace RideShootingTextDataNS {
  export type RideShootingTextData = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    String:           string;
    String_de:        string;
    String_en:        string;
    String_fr:        string;
    String_ja:        string;
    Url:              string;
  }
  
  export type GameContentLinks = {
    RideShooting: RideShooting;
  }
  
  export type RideShooting = {
    StartText: number[];
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

export type RideShootingTextData = RideShootingTextDataNS.RideShootingTextData;
