
export namespace CircleActivityIndexNS {
  export type CircleActivityIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = CircleActivityIndexNS.CircleActivityIndex;

export namespace CircleActivityNS {
  export type CircleActivity = {
    GameContentLinks: any[];
    ID:               number;
    Icon:             string;
    IconID:           number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Order:            number;
    Patch:            null;
    Url:              string;
  }
  
}

export type CircleActivity = CircleActivityNS.CircleActivity;
