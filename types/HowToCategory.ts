
export namespace HowToCategoryIndexNS {
  export type HowToCategoryIndex = {
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

export type Index = HowToCategoryIndexNS.HowToCategoryIndex;

export namespace HowToCategoryNS {
  export type HowToCategory = {
    Category:         string;
    Category_de:      string;
    Category_en:      string;
    Category_fr:      string;
    Category_ja:      string;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type HowToCategory = HowToCategoryNS.HowToCategory;
