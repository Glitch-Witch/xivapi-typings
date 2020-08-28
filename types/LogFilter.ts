
export namespace LogFilterIndexNS {
  export type LogFilterIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = LogFilterIndexNS.LogFilterIndex;

export namespace LogFilterNS {
  export type LogFilter = {
    Caster:           number;
    Category:         number;
    DisplayOrder:     number;
    Example:          string;
    Example_de:       string;
    Example_en:       string;
    Example_fr:       string;
    Example_ja:       string;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    LogKind:          number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            number;
    Preset:           number;
    Target:           number;
    Url:              string;
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

export type LogFilter = LogFilterNS.LogFilter;
