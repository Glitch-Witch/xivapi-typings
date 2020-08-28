
export namespace ScreenImageIndexNS {
  export type ScreenImageIndex = {
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

export type Index = ScreenImageIndexNS.ScreenImageIndex;

export namespace ScreenImageNS {
  export type ScreenImage = {
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
  
  export type GameContentLinks = {
    ExVersion:    ExVersion;
    ScenarioTree: ScenarioTree;
  }
  
  export type ExVersion = {
    AcceptJingle: number[];
  }
  
  export type ScenarioTree = {
    Image: number[];
  }
  
  export type Jingle = {
    ID: number;
  }
  
}

export type ScreenImage = ScreenImageNS.ScreenImage;
