
export namespace ItemSortCategoryIndexNS {
  export type ItemSortCategoryIndex = {
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

export type Index = ItemSortCategoryIndexNS.ItemSortCategoryIndex;

export namespace ItemSortCategoryNS {
  export type ItemSortCategory = {
    GameContentLinks: any[];
    ID:               number;
    Param:            number;
    Patch:            null;
    Url:              string;
  }
  
}

export type ItemSortCategory = ItemSortCategoryNS.ItemSortCategory;
