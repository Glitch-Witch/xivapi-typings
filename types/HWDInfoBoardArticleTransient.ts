export interface HWDInfoBoardArticleTransientIndex {
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


export interface HWDInfoBoardArticleTransient1 {
  GameContentLinks: any[];
  ID:               number;
  Image:            string;
  ImageID:          number;
  NpcName:          string;
  NpcName_de:       string;
  NpcName_en:       string;
  NpcName_fr:       string;
  NpcName_ja:       string;
  Patch:            null;
  Text:             string;
  Text_de:          string;
  Text_en:          string;
  Text_fr:          string;
  Text_ja:          string;
  Url:              string;
}
