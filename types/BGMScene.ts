
export namespace BGMSceneIndexNS {
  export type BGMSceneIndex = {
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

export type Index = BGMSceneIndexNS.BGMSceneIndex;

export namespace BGMSceneNS {
  export type BGMScene = {
    EnableDisableRestart: number;
    EnablePassEnd:        number;
    ForceAutoReset:       number;
    GameContentLinks:     any[];
    ID:                   number;
    IgnoreBattle:         number;
    Patch:                null;
    Resume:               number;
    Url:                  string;
  }
  
}

export type BGMScene = BGMSceneNS.BGMScene;
