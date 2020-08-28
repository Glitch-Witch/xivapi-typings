
export namespace BalloonIndexNS {
  export type BalloonIndex = {
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

export type Index = BalloonIndexNS.BalloonIndex;

export namespace BalloonNS {
  export type Balloon = {
    Dialogue:         string;
    Dialogue_de:      string;
    Dialogue_en:      string;
    Dialogue_fr:      string;
    Dialogue_ja:      string;
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    Slowly:           number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Behavior: Behavior;
  }
  
  export type Behavior = {
    Balloon: string[];
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

export type Balloon = BalloonNS.Balloon;
