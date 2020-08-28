
export namespace SpearfishingRecordPageIndexNS {
  export type SpearfishingRecordPageIndex = {
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

export type Index = SpearfishingRecordPageIndexNS.SpearfishingRecordPageIndex;

export namespace SpearfishingRecordPageNS {
  export type SpearfishingRecordPage = {
    GameContentLinks:  any[];
    ID:                number;
    Image:             string;
    ImageID:           number;
    Patch:             null;
    PlaceName:         PlaceName;
    PlaceNameTarget:   string;
    PlaceNameTargetID: number;
    Url:               string;
  }
  
  export type PlaceName = {
    ID:               number;
    Icon:             string;
    Name:             string;
    NameNoArticle:    string;
    NameNoArticle_de: string;
    NameNoArticle_en: string;
    NameNoArticle_fr: string;
    NameNoArticle_ja: string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
  }
  
}

export type SpearfishingRecordPage = SpearfishingRecordPageNS.SpearfishingRecordPage;
