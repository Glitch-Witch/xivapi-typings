export interface HWDInfoBoardArticleIndex {
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


export interface HWDInfoBoardArticle {
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
