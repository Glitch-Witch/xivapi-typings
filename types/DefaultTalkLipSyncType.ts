export interface DefaultTalkLipSyncTypeIndex {
  Pagination: Pagination;
  Results:    Result[];
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface Result {
  ID:   number;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface DefaultTalkLipSyncType1 {
  ActionTimeline:         null;
  ActionTimelineTarget:   string;
  ActionTimelineTargetID: number;
  GameContentLinks:       any[];
  ID:                     number;
  Patch:                  null;
  Url:                    string;
}
