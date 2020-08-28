
export namespace HWDInfoBoardArticleIndexNS {
  export type HWDInfoBoardArticleIndex = {
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

export type Index = HWDInfoBoardArticleIndexNS.HWDInfoBoardArticleIndex;

export namespace HWDInfoBoardArticleNS {
  export type HWDInfoBoardArticle = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Text:             string;
    Text_de:          string;
    Text_en:          string;
    Text_fr:          string;
    Text_ja:          string;
    Type:             null;
    TypeTarget:       string;
    TypeTargetID:     number;
    Url:              string;
  }
  
}

export type HWDInfoBoardArticle = HWDInfoBoardArticleNS.HWDInfoBoardArticle;
