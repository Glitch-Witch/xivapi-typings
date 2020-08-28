
export namespace PatchMarkIndexNS {
  export type PatchMarkIndex = {
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

export type Index = PatchMarkIndexNS.PatchMarkIndex;

export namespace PatchMarkNS {
  export type PatchMark = {
    Category:         number;
    GameContentLinks: any[];
    ID:               number;
    MarkID:           number;
    Patch:            null;
    SubCategory:      number;
    SubCategoryType:  number;
    Url:              string;
    Version:          number;
  }
  
}

export type PatchMark = PatchMarkNS.PatchMark;
