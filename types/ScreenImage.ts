export interface ScreenImageIndex {
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


export interface ScreenImage {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Image:            string;
  ImageID:          number;
  Jingle:           Jingle;
  JingleTarget:     string;
  JingleTargetID:   number;
  Lang:             number;
  Patch:            null;
  Type:             number;
  Url:              string;
}

export interface GameContentLinks {
  ExVersion:    ExVersion;
  ScenarioTree: ScenarioTree;
}

export interface ExVersion {
  AcceptJingle: number[];
}

export interface ScenarioTree {
  Image: number[];
}

export interface Jingle {
  ID: number;
}
