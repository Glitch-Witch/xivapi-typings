
export namespace AddonHudIndexNS {
  export type AddonHudIndex = {
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

export type Index = AddonHudIndexNS.AddonHudIndex;

export namespace AddonHudNS {
  export type AddonHud = {
    Function:         string;
    Function_de:      string;
    Function_en:      string;
    Function_fr:      string;
    Function_ja:      string;
    GameContentLinks: any[];
    ID:               number;
    Long:             string;
    Long_de:          string;
    Long_en:          string;
    Long_fr:          string;
    Long_ja:          string;
    Patch:            null;
    Short:            string;
    Short_de:         string;
    Short_en:         string;
    Short_fr:         string;
    Short_ja:         string;
    Url:              string;
  }
  
}

export type AddonHud = AddonHudNS.AddonHud;
