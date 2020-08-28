
export namespace SpecialShopIndexNS {
  export type SpecialShopIndex = {
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
    Name: string;
    Url:  string;
  }

}

export type Index = SpecialShopIndexNS.SpecialShopIndex;

export namespace SpecialShopNS {
  export type SpecialShopClass = {
    InclusionShopSeries: InclusionShopSeries;
  }

  export type InclusionShopSeries = {
    SpecialShop: string[];
  }

  export enum SpecialShopEnum {
    Achievement = "Achievement",
    DefaultTalk = "DefaultTalk",
    Empty = "",
    Item = "Item",
    Quest = "Quest",
    SpecialShop1769472 = "/SpecialShop/1769472",
    SpecialShopItemCategory = "SpecialShopItemCategory",
  }

}

export type SpecialShop = SpecialShopNS.SpecialShopClass;
