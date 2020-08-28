
export namespace HWDInfoBoardArticleTransientIndexNS {
  export type HWDInfoBoardArticleTransientIndex = {
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

export type Index = HWDInfoBoardArticleTransientIndexNS.HWDInfoBoardArticleTransientIndex;

export namespace HWDInfoBoardArticleTransientNS {
  export type HWDInfoBoardArticleTransient = {
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
  
}

export type HWDInfoBoardArticleTransient = HWDInfoBoardArticleTransientNS.HWDInfoBoardArticleTransient;
