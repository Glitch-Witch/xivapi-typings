
export namespace PhysicsWindIndexNS {
  export type PhysicsWindIndex = {
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

export type Index = PhysicsWindIndexNS.PhysicsWindIndex;

export namespace PhysicsWindNS {
  export type PhysicsWind = {
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
  
}

export type PhysicsWind = PhysicsWindNS.PhysicsWind;
