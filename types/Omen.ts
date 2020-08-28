
export namespace OmenIndexNS {
  export type OmenIndex = {
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

export type Index = OmenIndexNS.OmenIndex;

export namespace OmenNS {
  export type Omen = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    LargeScale:       number;
    Patch:            number;
    Path:             string;
    PathAlly:         string;
    PathAlly_en:      string;
    Path_en:          string;
    RestrictYScale:   number;
    Type:             number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Action: Action;
  }
  
  export type Action = {
    Omen: number[];
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

export type Omen = OmenNS.Omen;
