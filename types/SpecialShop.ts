export interface SpecialShopIndex {
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
  Name: string;
  Url:  string;
}


export interface SpecialShop1769472_Class {
  InclusionShopSeries: InclusionShopSeries;
}

export interface InclusionShopSeries {
  SpecialShop: string[];
}

export enum SpecialShop1769472_Enum {
  Achievement = "Achievement",
  DefaultTalk = "DefaultTalk",
  Empty = "",
  Item = "Item",
  Quest = "Quest",
  SpecialShop1769472 = "/SpecialShop/1769472",
  SpecialShopItemCategory = "SpecialShopItemCategory",
}
