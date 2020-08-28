
export namespace AnimationLODIndexNS {
  export type AnimationLODIndex = {
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

export type Index = AnimationLODIndexNS.AnimationLODIndex;

export namespace AnimationLODNS {
  export type AnimationLOD = {
    AnimationEnable0: number;
    AnimationEnable1: number;
    AnimationEnable2: number;
    AnimationEnable3: number;
    AnimationEnable4: number;
    AnimationEnable5: number;
    AnimationEnable6: number;
    AnimationEnable7: number;
    BoneLOD:          number;
    CameraDistance:   number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    SampleInterval:   number;
    Url:              string;
  }
  
}

export type AnimationLOD = AnimationLODNS.AnimationLOD;
