
export namespace HWDLevelChangeDeceptionIndexNS {
  export type HWDLevelChangeDeceptionIndex = {
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

export type Index = HWDLevelChangeDeceptionIndexNS.HWDLevelChangeDeceptionIndex;

export namespace HWDLevelChangeDeceptionNS {
  export type HWDLevelChangeDeception = {
    GameContentLinks: any[];
    ID:               number;
    Image:            null;
    ImageTarget:      string;
    ImageTargetID:    number;
    Patch:            null;
    Url:              string;
  }
  
}

export type HWDLevelChangeDeception = HWDLevelChangeDeceptionNS.HWDLevelChangeDeception;
