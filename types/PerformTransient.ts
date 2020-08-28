
export namespace PerformTransientIndexNS {
  export type PerformTransientIndex = {
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

export type Index = PerformTransientIndexNS.PerformTransientIndex;

export namespace PerformTransientNS {
  export type PerformTransient = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    Text:             string;
    Text_de:          string;
    Text_en:          string;
    Text_fr:          string;
    Text_ja:          string;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Perform: Perform;
  }
  
  export type Perform = {
    Transient: number[];
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

export type PerformTransient = PerformTransientNS.PerformTransient;
