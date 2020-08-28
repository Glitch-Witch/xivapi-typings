
export namespace CollectablesShopIndexNS {
  export type CollectablesShopIndex = {
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

export type Index = CollectablesShopIndexNS.CollectablesShopIndex;

export namespace CollectablesShopNS {
  export type CollectablesShop = {
    GameContentLinks:    any[];
    ID:                  number;
    Name:                string;
    Name_de:             string;
    Name_en:             string;
    Name_fr:             string;
    Name_ja:             string;
    Patch:               null;
    Quest:               null;
    QuestTarget:         string;
    QuestTargetID:       number;
    ShopItems0:          null;
    ShopItems0Target:    string;
    ShopItems0TargetID:  number;
    ShopItems1:          null;
    ShopItems10:         null;
    ShopItems10Target:   string;
    ShopItems10TargetID: number;
    ShopItems1Target:    string;
    ShopItems1TargetID:  number;
    ShopItems2:          null;
    ShopItems2Target:    string;
    ShopItems2TargetID:  number;
    ShopItems3:          null;
    ShopItems3Target:    string;
    ShopItems3TargetID:  number;
    ShopItems4:          null;
    ShopItems4Target:    string;
    ShopItems4TargetID:  number;
    ShopItems5:          null;
    ShopItems5Target:    string;
    ShopItems5TargetID:  number;
    ShopItems6:          null;
    ShopItems6Target:    string;
    ShopItems6TargetID:  number;
    ShopItems7:          null;
    ShopItems7Target:    string;
    ShopItems7TargetID:  number;
    ShopItems8:          null;
    ShopItems8Target:    string;
    ShopItems8TargetID:  number;
    ShopItems9:          null;
    ShopItems9Target:    string;
    ShopItems9TargetID:  number;
    Url:                 string;
  }
  
}

export type CollectablesShop = CollectablesShopNS.CollectablesShop;
