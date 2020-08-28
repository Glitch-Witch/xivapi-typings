
export namespace EmjDaniIndexNS {
  export type EmjDaniIndex = {
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

export type Index = EmjDaniIndexNS.EmjDaniIndex;

export namespace EmjDaniNS {
  export type EmjDani = {
    GameContentLinks: any[];
    ID:               number;
    Icon:             string;
    IconID:           number;
    Patch:            null;
    Url:              string;
  }
  
}

export type EmjDani = EmjDaniNS.EmjDani;
