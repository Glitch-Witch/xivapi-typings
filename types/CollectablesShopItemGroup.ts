
export namespace CollectablesShopItemGroupIndexNS {
  export type CollectablesShopItemGroupIndex = {
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
    Name: Name;
    Url:  string;
  }
  
  export enum Name {
    Empty = "",
    LV5060 = "Lv. 50-60",
    LV6170 = "Lv. 61-70",
    LV7180 = "Lv. 71-80",
  }
  
}

export type Index = CollectablesShopItemGroupIndexNS.CollectablesShopItemGroupIndex;

export namespace CollectablesShopItemGroupNS {
  export type CollectablesShopItemGroup = {
    GameContentLinks: any[];
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    Url:              string;
  }
  
}

export type CollectablesShopItemGroup = CollectablesShopItemGroupNS.CollectablesShopItemGroup;
