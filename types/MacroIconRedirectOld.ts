
export namespace MacroIconRedirectOldIndexNS {
  export type MacroIconRedirectOldIndex = {
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

export type Index = MacroIconRedirectOldIndexNS.MacroIconRedirectOldIndex;

export namespace MacroIconRedirectOldNS {
  export type MacroIconRedirectOld = {
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    IconNew:          string;
    IconNewID:        number;
    IconOld:          string;
    IconOldID:        number;
    Patch:            number;
    Url:              string;
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

export type MacroIconRedirectOld = MacroIconRedirectOldNS.MacroIconRedirectOld;
