export interface BGMFadeIndex {
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


export interface BGMFade1 {
  BGMFadeType:         BGMFadeType;
  BGMFadeTypeTarget:   string;
  BGMFadeTypeTargetID: number;
  GameContentLinks:    any[];
  ID:                  number;
  Patch:               null;
  SceneIn:             number;
  SceneOut:            number;
  Url:                 string;
}

export interface BGMFadeType {
  FadeInStartTime:  string;
  FadeInTime:       number;
  FadeOutTime:      number;
  ID:               number;
  ResumeFadeInTime: string;
}
