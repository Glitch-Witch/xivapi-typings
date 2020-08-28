
export namespace MateriaTomestoneRateIndexNS {
  export type MateriaTomestoneRateIndex = {
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

export type Index = MateriaTomestoneRateIndexNS.MateriaTomestoneRateIndex;

export namespace MateriaTomestoneRateNS {
  export type MateriaTomestoneRate = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Rate:             number;
    Url:              string;
  }
  
}

export type MateriaTomestoneRate = MateriaTomestoneRateNS.MateriaTomestoneRate;
