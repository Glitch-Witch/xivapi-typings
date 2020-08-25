export interface PhysicsWindIndex {
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


export interface PhysicsWind1 {
  Amplitude:          string;
  AmplitudeFrequency: string;
  GameContentLinks:   any[];
  ID:                 number;
  Patch:              null;
  PowerFrequency:     number;
  PowerMax:           string;
  PowerMin:           string;
  Threshold:          string;
  Url:                string;
}
