
export namespace BGMFadeIndexNS {
  export type BGMFadeIndex = {
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

export type Index = BGMFadeIndexNS.BGMFadeIndex;

export namespace BGMFadeNS {
  export type BGMFade = {
    BGMFadeType:         BGMFadeType;
    BGMFadeTypeTarget:   string;
    BGMFadeTypeTargetID: number;
    GameContentLinks:    any[];
    ID:                  number;
    Patch:               null;
    SceneIn:             number;
    SceneOut:            number;
    Url:                 string;
  }
  
  export type BGMFadeType = {
    FadeInStartTime:  string;
    FadeInTime:       number;
    FadeOutTime:      number;
    ID:               number;
    ResumeFadeInTime: string;
  }
  
}

export type BGMFade = BGMFadeNS.BGMFade;
