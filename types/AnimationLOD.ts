export interface AnimationLODIndex {
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


export interface AnimationLOD1 {
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
