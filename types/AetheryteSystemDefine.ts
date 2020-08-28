
export namespace AetheryteSystemDefineIndexNS {
  export type AetheryteSystemDefineIndex = {
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

export type Index = AetheryteSystemDefineIndexNS.AetheryteSystemDefineIndex;

export namespace AetheryteSystemDefineNS {
  export type AetheryteSystemDefine = {
    DefineValue:      number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Text:             string;
    Text_en:          string;
    Url:              string;
  }
  
}

export type AetheryteSystemDefine = AetheryteSystemDefineNS.AetheryteSystemDefine;
