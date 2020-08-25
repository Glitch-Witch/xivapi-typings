export interface GrandCompanyIndex {
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


export interface GrandCompany1 {
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

export interface GameContentLinks {
  BuddyEquip:          BuddyEquip;
  GCScripShopCategory: BuddyEquip;
  GCShop:              BuddyEquip;
  Item:                BuddyEquip;
  Quest:               BuddyEquip;
}

export interface BuddyEquip {
  GrandCompany: number[];
}
