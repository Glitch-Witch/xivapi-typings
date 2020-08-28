
export namespace FurnitureCatalogCategoryIndexNS {
  export type FurnitureCatalogCategoryIndex = {
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

export type Index = FurnitureCatalogCategoryIndexNS.FurnitureCatalogCategoryIndex;

export namespace FurnitureCatalogCategoryNS {
  export type FurnitureCatalogCategory = {
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
    FurnitureCatalogItemList: FurnitureCatalogItemList;
  }
  
  export type FurnitureCatalogItemList = {
    Category: number[];
  }
  
}

export type FurnitureCatalogCategory = FurnitureCatalogCategoryNS.FurnitureCatalogCategory;
