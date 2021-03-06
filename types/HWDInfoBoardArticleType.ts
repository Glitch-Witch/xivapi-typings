
export namespace HWDInfoBoardArticleTypeIndexNS {
  export type HWDInfoBoardArticleTypeIndex = {
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

export type Index = HWDInfoBoardArticleTypeIndexNS.HWDInfoBoardArticleTypeIndex;

export namespace HWDInfoBoardArticleTypeNS {
  export type HWDInfoBoardArticleType = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    Type:             string;
    Type_de:          string;
    Type_en:          string;
    Type_fr:          string;
    Type_ja:          string;
    Url:              string;
  }
  
  export type GameContentLinks = {
    HWDInfoBoardArticle: HWDInfoBoardArticle;
  }
  
  export type HWDInfoBoardArticle = {
    Type: number[];
  }
  
  export type GamePatch = {
    Banner:        null;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    IsExpansion:   boolean;
    Name:          string;
    Name_cn:       string;
    Name_de:       string;
    Name_en:       string;
    Name_fr:       string;
    Name_ja:       string;
    Name_kr:       string;
    PatchNotes:    string;
    PatchNotes_de: string;
    PatchNotes_en: string;
    PatchNotes_fr: string;
    PatchNotes_ja: string;
    ReleaseDate:   number;
    Url:           string;
    Version:       string;
  }
  
}

export type HWDInfoBoardArticleType = HWDInfoBoardArticleTypeNS.HWDInfoBoardArticleType;
