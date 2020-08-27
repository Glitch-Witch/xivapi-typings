export interface MountCustomizeIndex {
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


export interface MountCustomize {
  AuRaFemaleCameraHeight:        number;
  AuRaFemaleScale:               number;
  AuRaMaleCameraHeight:          number;
  AuRaMaleScale:                 number;
  ElezenFemaleCameraHeight:      number;
  ElezenFemaleScale:             number;
  ElezenMaleCameraHeight:        number;
  ElezenMaleScale:               number;
  GameContentLinks:              GameContentLinks;
  HrothgarFemaleScale:           number;
  HrothgarMaleCameraHeight:      number;
  HrothgarMaleScale:             number;
  HrothgarRoeFemaleCameraHeight: number;
  HyurFemaleCameraHeight:        number;
  HyurFemaleScale:               number;
  HyurMaleCameraHeight:          number;
  HyurMaleScale:                 number;
  ID:                            number;
  LalaFemaleCameraHeight:        number;
  LalaFemaleScale:               number;
  LalaMaleCameraHeight:          number;
  LalaMaleScale:                 number;
  MiqoFemaleCameraHeight:        number;
  MiqoFemaleScale:               number;
  MiqoMaleCameraHeight:          number;
  MiqoMaleScale:                 number;
  Patch:                         null;
  RoeFemaleCameraHeight:         number;
  RoeFemaleScale:                number;
  RoeMaleCameraHeight:           number;
  RoeMaleScale:                  number;
  Url:                           string;
  VieraFemaleCameraHeight:       number;
  VieraFemaleScale:              number;
  VieraMaleCameraHeight:         number;
  VieraMaleScale:                number;
}

export interface GameContentLinks {
  Mount: Mount;
}

export interface Mount {
  MountCustomize: number[];
}
