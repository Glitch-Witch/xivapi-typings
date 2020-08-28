
export namespace MountCustomizeIndexNS {
  export type MountCustomizeIndex = {
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

export type Index = MountCustomizeIndexNS.MountCustomizeIndex;

export namespace MountCustomizeNS {
  export type MountCustomize = {
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
  
  export type GameContentLinks = {
    Mount: Mount;
  }
  
  export type Mount = {
    MountCustomize: number[];
  }
  
}

export type MountCustomize = MountCustomizeNS.MountCustomize;
