
export namespace YardCatalogCategoryIndexNS {
  export type YardCatalogCategoryIndex = {
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

export type Index = YardCatalogCategoryIndexNS.YardCatalogCategoryIndex;

export namespace YardCatalogCategoryNS {
  export type YardCatalogCategory = {
    Category:         string;
    Category_de:      string;
    Category_en:      string;
    Category_fr:      string;
    Category_ja:      string;
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    YardCatalogItemList: YardCatalogItemList;
  }
  
  export type YardCatalogItemList = {
    Category: number[];
  }
  
}

export type YardCatalogCategory = YardCatalogCategoryNS.YardCatalogCategory;
