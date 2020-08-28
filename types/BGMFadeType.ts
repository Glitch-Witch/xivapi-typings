
export namespace BGMFadeTypeIndexNS {
  export type BGMFadeTypeIndex = {
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

export type Index = BGMFadeTypeIndexNS.BGMFadeTypeIndex;

export namespace BGMFadeTypeNS {
  export type BGMFadeType = {
    FadeInStartTime:  number;
    FadeInTime:       number;
    FadeOutTime:      string;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    ResumeFadeInTime: string;
    Url:              string;
  }
  
}

export type BGMFadeType = BGMFadeTypeNS.BGMFadeType;
