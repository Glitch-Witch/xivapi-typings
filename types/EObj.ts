
export namespace EObjIndexNS {
  export type EObjIndex = {
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

export type Index = EObjIndexNS.EObjIndex;

export namespace EObjNS {
  export type EObj = {
    "AddedIn5-3":      number;
    Data:              number;
    DirectorControl:   number;
    EventHighAddition: number;
    EyeCollision:      number;
    GameContentLinks:  any[];
    GamePatch:         GamePatch;
    ID:                number;
    Invisibility:      number;
    Patch:             number;
    PopType:           number;
    SgbPath:           null;
    SgbPathTarget:     string;
    SgbPathTargetID:   number;
    Target:            number;
    Url:               string;
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

export type EObj = EObjNS.EObj;
