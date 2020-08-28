
export namespace GimmickRectIndexNS {
  export type GimmickRectIndex = {
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

export type Index = GimmickRectIndexNS.GimmickRectIndex;

export namespace GimmickRectNS {
  export type GimmickRect = {
    GameContentLinks: any[];
    ID:               number;
    LayoutID:         number;
    Param0:           number;
    Param1:           number;
    Patch:            null;
    TriggerIn:        number;
    TriggerOut:       number;
    Url:              string;
  }
  
}

export type GimmickRect = GimmickRectNS.GimmickRect;
