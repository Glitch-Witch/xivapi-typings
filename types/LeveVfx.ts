
export namespace LeveVfxIndexNS {
  export type LeveVfxIndex = {
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
    Icon: string;
    Name: null;
    Url:  string;
  }
  
}

export type Index = LeveVfxIndexNS.LeveVfxIndex;

export namespace LeveVfxNS {
  export type LeveVfx = {
    Effect:           string;
    Effect_en:        string;
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Icon:             string;
    IconID:           number;
    Patch:            number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Leve: Leve;
  }
  
  export type Leve = {
    LeveVfxFrame: number[];
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

export type LeveVfx = LeveVfxNS.LeveVfx;
