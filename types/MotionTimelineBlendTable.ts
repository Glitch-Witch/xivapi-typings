
export namespace MotionTimelineBlendTableIndexNS {
  export type MotionTimelineBlendTableIndex = {
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

export type Index = MotionTimelineBlendTableIndexNS.MotionTimelineBlendTableIndex;

export namespace MotionTimelineBlendTableNS {
  export type MotionTimelineBlendTable = {
    BlendFram_TypeA:  number;
    BlendFram_TypeB:  number;
    BlendFram_TypeC:  number;
    BlendFrame_PC:    number;
    DestBlendGroup:   number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    SrcBlendGroup:    number;
    Url:              string;
  }
  
}

export type MotionTimelineBlendTable = MotionTimelineBlendTableNS.MotionTimelineBlendTable;
