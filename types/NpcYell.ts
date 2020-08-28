
export namespace NpcYellIndexNS {
  export type NpcYellIndex = {
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

export type Index = NpcYellIndexNS.NpcYellIndex;

export namespace NpcYellNS {
  export type NpcYell = {
    BalloonTime:      number;
    BattleTalkTime:   number;
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    IsBalloonSlow:    number;
    OutputType:       number;
    Patch:            number;
    Text:             number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Resident: Resident;
  }
  
  export type Resident = {
    NpcYell: string[];
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

export type NpcYell = NpcYellNS.NpcYell;
