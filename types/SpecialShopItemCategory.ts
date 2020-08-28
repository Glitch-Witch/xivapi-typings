
export namespace SpecialShopItemCategoryIndexNS {
  export type SpecialShopItemCategoryIndex = {
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

export type Index = SpecialShopItemCategoryIndexNS.SpecialShopItemCategoryIndex;

export namespace SpecialShopItemCategoryNS {
  export type SpecialShopItemCategory = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    SpecialShop: { [key: string]: number[] };
  }
  
}

export type SpecialShopItemCategory = SpecialShopItemCategoryNS.SpecialShopItemCategory;
