
export namespace ScenarioTypeIndexNS {
  export type ScenarioTypeIndex = {
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

export type Index = ScenarioTypeIndexNS.ScenarioTypeIndex;

export namespace ScenarioTypeNS {
  export type ScenarioType = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Type:             string;
    Type_de:          string;
    Type_en:          string;
    Type_fr:          string;
    Type_ja:          string;
    Url:              string;
  }
  
  export type GameContentLinks = {
    ScenarioTree: ScenarioTree;
  }
  
  export type ScenarioTree = {
    Type: number[];
  }
  
}

export type ScenarioType = ScenarioTypeNS.ScenarioType;
