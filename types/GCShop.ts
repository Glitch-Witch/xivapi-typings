
export namespace GCShopIndexNS {
  export type GCShopIndex = {
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

export type Index = GCShopIndexNS.GCShopIndex;

export namespace GCShopNS {
  export type GCShop = {
    GameContentLinks:     any[];
    GamePatch:            GamePatch;
    GrandCompany:         null;
    GrandCompanyTarget:   string;
    GrandCompanyTargetID: number;
    ID:                   number;
    Patch:                number;
    Url:                  string;
  }
  
  export type GamePatch = {
    Banner:      string;
    ExName:      string;
    ExVersion:   number;
    ID:          number;
    Name:        string;
    Name_cn:     string;
    Name_de:     string;
    Name_en:     string;
    Name_fr:     string;
    Name_ja:     string;
    Name_kr:     string;
    ReleaseDate: number;
    Version:     string;
  }
  
}

export type GCShop = GCShopNS.GCShop;
