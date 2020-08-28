
export namespace KnockbackIndexNS {
  export type KnockbackIndex = {
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

export type Index = KnockbackIndexNS.KnockbackIndex;

export namespace KnockbackNS {
  export type Knockback = {
    CancelMove:       number;
    Direction:        number;
    DirectionArg:     number;
    Distance:         number;
    GameContentLinks: any[];
    ID:               number;
    Motion:           number;
    NearDistance:     number;
    Patch:            null;
    Speed:            number;
    Url:              string;
  }
  
}

export type Knockback = KnockbackNS.Knockback;
