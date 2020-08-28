
export namespace DefaultTalkLipSyncTypeIndexNS {
  export type DefaultTalkLipSyncTypeIndex = {
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

export type Index = DefaultTalkLipSyncTypeIndexNS.DefaultTalkLipSyncTypeIndex;

export namespace DefaultTalkLipSyncTypeNS {
  export type DefaultTalkLipSyncType = {
    ActionTimeline:         null;
    ActionTimelineTarget:   string;
    ActionTimelineTargetID: number;
    GameContentLinks:       any[];
    ID:                     number;
    Patch:                  null;
    Url:                    string;
  }
  
}

export type DefaultTalkLipSyncType = DefaultTalkLipSyncTypeNS.DefaultTalkLipSyncType;
