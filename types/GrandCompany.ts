
export namespace GrandCompanyIndexNS {
  export type GrandCompanyIndex = {
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

export type Index = GrandCompanyIndexNS.GrandCompanyIndex;

export namespace GrandCompanyNS {
  export type GrandCompany = {
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
    BuddyEquip:          BuddyEquip;
    GCScripShopCategory: BuddyEquip;
    GCShop:              BuddyEquip;
    Item:                BuddyEquip;
    Quest:               BuddyEquip;
  }
  
  export type BuddyEquip = {
    GrandCompany: number[];
  }
  
}

export type GrandCompany = GrandCompanyNS.GrandCompany;
