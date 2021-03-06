
export namespace BehaviorIndexNS {
  export type BehaviorIndex = {
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
    ID:   string;
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = BehaviorIndexNS.BehaviorIndex;

export namespace BehaviorNS {
  export type Behavior = {
    Balloon:          null;
    BalloonTarget:    string;
    BalloonTargetID:  number;
    Condition0Target: number;
    Condition0Type:   number;
    Condition1Target: number;
    Condition1Type:   number;
    ContentArgument0: number;
    ContentArgument1: number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               string;
    Patch:            number;
    Url:              string;
  }
  
  export type GamePatch = {
    Banner:        null;
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

export type Behavior = BehaviorNS.Behavior;
