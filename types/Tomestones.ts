
export namespace TomestonesIndexNS {
  export type TomestonesIndex = {
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

export type Index = TomestonesIndexNS.TomestonesIndex;

export namespace TomestonesNS {
  export type Tomestones = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Url:              string;
    WeeklyLimit:      number;
  }
  
  export type GameContentLinks = {
    TomestonesItem: TomestonesItem;
  }
  
  export type TomestonesItem = {
    Tomestones: number[];
  }
  
}

export type Tomestones = TomestonesNS.Tomestones;
