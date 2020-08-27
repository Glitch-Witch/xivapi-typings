export interface MoveVfxIndex {
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


export interface MoveVfx {
  GameContentLinks:   any[];
  ID:                 number;
  Patch:              null;
  Url:                string;
  VFXNormal:          Vfx;
  VFXNormalTarget:    string;
  VFXNormalTargetID:  number;
  VFXWalking:         Vfx;
  VFXWalkingTarget:   string;
  VFXWalkingTargetID: number;
}

export interface Vfx {
  ID:          number;
  Location:    string;
  Location_en: string;
}
