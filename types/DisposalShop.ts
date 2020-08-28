
export namespace DisposalShopIndexNS {
  export type DisposalShopIndex = {
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

export type Index = DisposalShopIndexNS.DisposalShopIndex;

export namespace DisposalShopNS {
  export type DisposalShop = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    ShopName:         string;
    ShopName_de:      string;
    ShopName_en:      string;
    ShopName_fr:      string;
    ShopName_ja:      string;
    Url:              string;
  }
  
}

export type DisposalShop = DisposalShopNS.DisposalShop;
