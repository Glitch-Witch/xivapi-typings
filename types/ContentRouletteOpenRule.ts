
export namespace ContentRouletteOpenRuleIndexNS {
  export type ContentRouletteOpenRuleIndex = {
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

export type Index = ContentRouletteOpenRuleIndexNS.ContentRouletteOpenRuleIndex;

export namespace ContentRouletteOpenRuleNS {
  export type ContentRouletteOpenRule = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Type:             number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    ContentRoulette: ContentRoulette;
  }
  
  export type ContentRoulette = {
    OpenRule: number[];
  }
  
}

export type ContentRouletteOpenRule = ContentRouletteOpenRuleNS.ContentRouletteOpenRule;
