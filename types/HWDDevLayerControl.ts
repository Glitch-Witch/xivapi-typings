
export namespace HWDDevLayerControlIndexNS {
  export type HWDDevLayerControlIndex = {
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

export type Index = HWDDevLayerControlIndexNS.HWDDevLayerControlIndex;

export namespace HWDDevLayerControlNS {
  export type HWDDevLayerControl = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type HWDDevLayerControl = HWDDevLayerControlNS.HWDDevLayerControl;
