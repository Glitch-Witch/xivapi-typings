
export namespace RacingChocoboNameInfoIndexNS {
  export type RacingChocoboNameInfoIndex = {
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

export type Index = RacingChocoboNameInfoIndexNS.RacingChocoboNameInfoIndex;

export namespace RacingChocoboNameInfoNS {
  export type RacingChocoboNameInfo = {
    GameContentLinks:                  any[];
    ID:                                number;
    Patch:                             null;
    RacingChocoboNameCategory:         null;
    RacingChocoboNameCategoryTarget:   string;
    RacingChocoboNameCategoryTargetID: number;
    Url:                               string;
  }
  
}

export type RacingChocoboNameInfo = RacingChocoboNameInfoNS.RacingChocoboNameInfo;
