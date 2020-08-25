export interface GuideIndex {
  Pagination: Pagination;
  Results:    Result[];
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface Result {
  ID:   number;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface Guide1 {
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

export interface GameContentLinks {
  JobHudManual: JobHudManual;
}

export interface JobHudManual {
  Guide: number[];
}

export interface GuideTitle {
  ID:       number;
  Title:    string;
  Title_de: string;
  Title_en: string;
  Title_fr: string;
  Title_ja: string;
}
