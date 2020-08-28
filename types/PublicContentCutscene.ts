
export namespace PublicContentCutsceneIndexNS {
  export type PublicContentCutsceneIndex = {
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

export type Index = PublicContentCutsceneIndexNS.PublicContentCutsceneIndex;

export namespace PublicContentCutsceneNS {
  export type PublicContentCutscene = {
    Cutscene:          Cutscene;
    Cutscene2:         null;
    Cutscene2Target:   string;
    Cutscene2TargetID: number;
    CutsceneTarget:    string;
    CutsceneTargetID:  number;
    GameContentLinks:  any[];
    ID:                number;
    Patch:             null;
    Url:               string;
  }
  
  export type Cutscene = {
    ID:      number;
    Path:    string;
    Path_en: string;
  }
  
}

export type PublicContentCutscene = PublicContentCutsceneNS.PublicContentCutscene;
