
export namespace HWDSharedGroupControlParamIndexNS {
  export type HWDSharedGroupControlParamIndex = {
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
    ID:   string;
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = HWDSharedGroupControlParamIndexNS.HWDSharedGroupControlParamIndex;

export namespace HWDSharedGroupControlParamNS {
  export type HWDSharedGroupControlParam = {
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               string;
    ParamValue:       number;
    Patch:            number;
    Url:              string;
  }
  
  export type GamePatch = {
    Banner:        null;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    IsExpansion:   boolean;
    Name:          string;
    Name_cn:       string;
    Name_de:       string;
    Name_en:       string;
    Name_fr:       string;
    Name_ja:       string;
    Name_kr:       string;
    PatchNotes:    string;
    PatchNotes_de: string;
    PatchNotes_en: string;
    PatchNotes_fr: string;
    PatchNotes_ja: string;
    ReleaseDate:   number;
    Url:           string;
    Version:       string;
  }
  
}

export type HWDSharedGroupControlParam = HWDSharedGroupControlParamNS.HWDSharedGroupControlParam;
