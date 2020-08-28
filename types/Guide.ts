
export namespace GuideIndexNS {
  export type GuideIndex = {
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

export type Index = GuideIndexNS.GuideIndex;

export namespace GuideNS {
  export type Guide = {
    GameContentLinks:   GameContentLinks;
    GuidePage:          null;
    GuidePageTarget:    string;
    GuidePageTargetID:  number;
    GuideTitle:         GuideTitle;
    GuideTitleTarget:   string;
    GuideTitleTargetID: number;
    ID:                 number;
    Patch:              null;
    Url:                string;
  }
  
  export type GameContentLinks = {
    JobHudManual: JobHudManual;
  }
  
  export type JobHudManual = {
    Guide: number[];
  }
  
  export type GuideTitle = {
    ID:       number;
    Title:    string;
    Title_de: string;
    Title_en: string;
    Title_fr: string;
    Title_ja: string;
  }
  
}

export type Guide = GuideNS.Guide;
