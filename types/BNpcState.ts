
export namespace BNpcStateIndexNS {
  export type BNpcStateIndex = {
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

export type Index = BNpcStateIndexNS.BNpcStateIndex;

export namespace BNpcStateNS {
  export type BNpcState = {
    Attribute0:       number;
    Attribute1:       number;
    Attribute2:       number;
    AttributeFlag0:   number;
    AttributeFlag1:   number;
    AttributeFlag2:   number;
    GameContentLinks: any[];
    ID:               number;
    Idle:             number;
    LoopTimeline:     number;
    OverRay:          number;
    Patch:            null;
    Scale:            number;
    Slot:             number;
    Url:              string;
  }
  
}

export type BNpcState = BNpcStateNS.BNpcState;
