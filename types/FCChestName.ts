
export namespace FCChestNameIndexNS {
  export type FCChestNameIndex = {
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

export type Index = FCChestNameIndexNS.FCChestNameIndex;

export namespace FCChestNameNS {
  export type FCChestName = {
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

export type FCChestName = FCChestNameNS.FCChestName;
