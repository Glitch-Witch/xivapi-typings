
export namespace WorldIndexNS {
  export type WorldIndex = {
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

export type Index = WorldIndexNS.WorldIndex;

export namespace WorldNS {
  export type World = {
    DataCenter:         null;
    DataCenterTarget:   string;
    DataCenterTargetID: number;
    GameContentLinks:   any[];
    GamePatch:          GamePatch;
    ID:                 number;
    InGame:             boolean;
    IsPublic:           number;
    Name:               string;
    Name_en:            string;
    Patch:              number;
    Url:                string;
    UserType:           number;
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

export type World = WorldNS.World;
