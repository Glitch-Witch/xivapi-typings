
export namespace CutsceneIndexNS {
  export type CutsceneIndex = {
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

export type Index = CutsceneIndexNS.CutsceneIndex;

export namespace CutsceneNS {
  export type Cutscene = {
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    Path:             string;
    Path_en:          string;
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

export type Cutscene = CutsceneNS.Cutscene;
