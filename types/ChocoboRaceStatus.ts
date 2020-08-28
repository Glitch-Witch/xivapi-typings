
export namespace ChocoboRaceStatusIndexNS {
  export type ChocoboRaceStatusIndex = {
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

export type Index = ChocoboRaceStatusIndexNS.ChocoboRaceStatusIndex;

export namespace ChocoboRaceStatusNS {
  export type ChocoboRaceStatus = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Status:           null;
    StatusTarget:     string;
    StatusTargetID:   number;
    Url:              string;
  }
  
}

export type ChocoboRaceStatus = ChocoboRaceStatusNS.ChocoboRaceStatus;
