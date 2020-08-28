
export namespace ContentGaugeIndexNS {
  export type ContentGaugeIndex = {
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

export type Index = ContentGaugeIndexNS.ContentGaugeIndex;

export namespace ContentGaugeNS {
  export type ContentGauge = {
    Color:            null;
    ColorTarget:      string;
    ColorTargetID:    number;
    GameContentLinks: any[];
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    TextString:       string;
    TextString_de:    string;
    TextString_en:    string;
    TextString_fr:    string;
    TextString_ja:    string;
    Url:              string;
  }
  
}

export type ContentGauge = ContentGaugeNS.ContentGauge;
