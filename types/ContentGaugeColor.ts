
export namespace ContentGaugeColorIndexNS {
  export type ContentGaugeColorIndex = {
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

export type Index = ContentGaugeColorIndexNS.ContentGaugeColorIndex;

export namespace ContentGaugeColorNS {
  export type ContentGaugeColor = {
    AndroidColor1:    string;
    AndroidColor2:    string;
    AndroidColor3:    string;
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    ContentGauge: ContentGauge;
  }
  
  export type ContentGauge = {
    Color: number[];
  }
  
}

export type ContentGaugeColor = ContentGaugeColorNS.ContentGaugeColor;
