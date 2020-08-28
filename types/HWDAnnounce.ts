
export namespace HWDAnnounceIndexNS {
  export type HWDAnnounceIndex = {
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

export type Index = HWDAnnounceIndexNS.HWDAnnounceIndex;

export namespace HWDAnnounceNS {
  export type HWDAnnounce = {
    ENPC:             null;
    ENPCTarget:       string;
    ENPCTargetID:     number;
    GameContentLinks: any[];
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    Url:              string;
  }
  
}

export type HWDAnnounce = HWDAnnounceNS.HWDAnnounce;
