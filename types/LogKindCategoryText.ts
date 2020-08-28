
export namespace LogKindCategoryTextIndexNS {
  export type LogKindCategoryTextIndex = {
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

export type Index = LogKindCategoryTextIndexNS.LogKindCategoryTextIndex;

export namespace LogKindCategoryTextNS {
  export type LogKindCategoryText = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Text:             string;
    Text_de:          string;
    Text_en:          string;
    Text_fr:          string;
    Text_ja:          string;
    Url:              string;
  }
  
  export type GameContentLinks = {
    LogKind: LogKind;
  }
  
  export type LogKind = {
    LogKindCategoryText: number[];
  }
  
}

export type LogKindCategoryText = LogKindCategoryTextNS.LogKindCategoryText;
