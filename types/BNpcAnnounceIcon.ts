
export namespace BNpcAnnounceIconIndexNS {
  export type BNpcAnnounceIconIndex = {
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
    Icon: string;
    Name: null;
    Url:  string;
  }
  
}

export type Index = BNpcAnnounceIconIndexNS.BNpcAnnounceIconIndex;

export namespace BNpcAnnounceIconNS {
  export type BNpcAnnounceIcon = {
    GameContentLinks: any[];
    ID:               number;
    Icon:             string;
    IconID:           number;
    Patch:            null;
    Url:              string;
  }
  
}

export type BNpcAnnounceIcon = BNpcAnnounceIconNS.BNpcAnnounceIcon;
