
export namespace CabinetCategoryIndexNS {
  export type CabinetCategoryIndex = {
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
    Icon: string;
    Name: null;
    Url:  string;
  }
  
}

export type Index = CabinetCategoryIndexNS.CabinetCategoryIndex;

export namespace CabinetCategoryNS {
  export type CabinetCategory = {
    Category:         Category;
    CategoryTarget:   string;
    CategoryTargetID: number;
    GameContentLinks: GameContentLinks;
    ID:               number;
    Icon:             string;
    IconID:           number;
    MenuOrder:        number;
    Patch:            null;
    Url:              string;
  }
  
  export type Category = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
  export type GameContentLinks = {
    Cabinet: Cabinet;
  }
  
  export type Cabinet = {
    Category: number[];
  }
  
}

export type CabinetCategory = CabinetCategoryNS.CabinetCategory;
