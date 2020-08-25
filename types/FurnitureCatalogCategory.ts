export interface FurnitureCatalogCategoryIndex {
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


export interface FurnitureCatalogCategory1 {
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

export interface GameContentLinks {
  FurnitureCatalogItemList: FurnitureCatalogItemList;
}

export interface FurnitureCatalogItemList {
  Category: number[];
}
