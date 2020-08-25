export interface MotionTimelineBlendTableIndex {
  Pagination: Pagination;
  Results:    Result[];
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface Result {
  ID:   number;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface MotionTimelineBlendTable1 {
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
