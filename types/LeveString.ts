
export namespace LeveStringIndexNS {
  export type LeveStringIndex = {
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

export type Index = LeveStringIndexNS.LeveStringIndex;

export namespace LeveStringNS {
  export type LeveString = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Objective:        string;
    Objective_de:     string;
    Objective_en:     string;
    Objective_fr:     string;
    Objective_ja:     string;
    Patch:            number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    BattleLeve: BattleLeve;
  }
  
  export type BattleLeve = {
    Objective0: number[];
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

export type LeveString = LeveStringNS.LeveString;
