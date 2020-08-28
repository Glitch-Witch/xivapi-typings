
export namespace WorldDCGroupTypeIndexNS {
  export type WorldDCGroupTypeIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = WorldDCGroupTypeIndexNS.WorldDCGroupTypeIndex;

export namespace WorldDCGroupTypeNS {
  export type WorldDCGroupType = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Name:             string;
    Name_en:          string;
    Patch:            number;
    Region:           number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    World: World;
  }
  
  export type World = {
    DataCenter: number[];
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

export type WorldDCGroupType = WorldDCGroupTypeNS.WorldDCGroupType;
