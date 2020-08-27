export interface DisposalShopIndex {
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


export interface DisposalShop {
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
