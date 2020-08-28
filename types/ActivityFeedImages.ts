
export namespace ActivityFeedImagesIndexNS {
  export type ActivityFeedImagesIndex = {
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

export type Index = ActivityFeedImagesIndexNS.ActivityFeedImagesIndex;

export namespace ActivityFeedImagesNS {
  export type ActivityFeedImages = {
    ActivityFeedDE:    string;
    ActivityFeedDE_en: string;
    ActivityFeedEN:    string;
    ActivityFeedEN_en: string;
    ActivityFeedFR:    string;
    ActivityFeedFR_en: string;
    ActivityFeedJA:    string;
    ActivityFeedJA_en: string;
    ExpansionImage:    string;
    ExpansionImage_en: string;
    GameContentLinks:  any[];
    ID:                number;
    Patch:             null;
    Url:               string;
  }
  
}

export type ActivityFeedImages = ActivityFeedImagesNS.ActivityFeedImages;
