
export namespace ModelSkeletonIndexNS {
  export type ModelSkeletonIndex = {
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

export type Index = ModelSkeletonIndexNS.ModelSkeletonIndex;

export namespace ModelSkeletonNS {
  export type ModelSkeleton = {
    FloatDown:        number;
    FloatHeight:      number;
    FloatUp:          number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    Height:           number;
    ID:               number;
    LoopFlySE:        number;
    MotionBlendType:  number;
    Patch:            number;
    Radius:           string;
    Url:              string;
    VFXScale:         number;
  }
  
  export type GamePatch = {
    Banner:      string;
    ExName:      string;
    ExVersion:   number;
    ID:          number;
    Name:        string;
    Name_cn:     string;
    Name_de:     string;
    Name_en:     string;
    Name_fr:     string;
    Name_ja:     string;
    Name_kr:     string;
    ReleaseDate: number;
    Version:     string;
  }
  
}

export type ModelSkeleton = ModelSkeletonNS.ModelSkeleton;
