export interface MotionTimelineIndex {
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


export interface MotionTimeline {
  BlendGroup:       number;
  Filename:         string;
  Filename_en:      string;
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               number;
  IsBlinkEnable:    number;
  IsLipEnable:      number;
  IsLoop:           number;
  Patch:            number;
  Url:              string;
}

export interface GamePatch {
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
