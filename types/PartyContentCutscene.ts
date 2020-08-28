
export namespace PartyContentCutsceneIndexNS {
  export type PartyContentCutsceneIndex = {
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

export type Index = PartyContentCutsceneIndexNS.PartyContentCutsceneIndex;

export namespace PartyContentCutsceneNS {
  export type PartyContentCutscene = {
    Cutscene:         Cutscene;
    CutsceneTarget:   string;
    CutsceneTargetID: number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
  export type Cutscene = {
    ID:      number;
    Path:    string;
    Path_en: string;
  }
  
}

export type PartyContentCutscene = PartyContentCutsceneNS.PartyContentCutscene;
