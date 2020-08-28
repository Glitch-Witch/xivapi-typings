
export namespace PhysicsGroupIndexNS {
  export type PhysicsGroupIndex = {
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

export type Index = PhysicsGroupIndexNS.PhysicsGroupIndex;

export namespace PhysicsGroupNS {
  export type PhysicsGroup = {
    ConfigSwitch0:            number;
    ConfigSwitch1:            number;
    ConfigSwitch2:            number;
    ForceAttractByPhysicsOff: number;
    GameContentLinks:         any[];
    GamePatch:                GamePatch;
    ID:                       number;
    PS3SimulationTime0:       number;
    PS3SimulationTime1:       number;
    PS3SimulationTime2:       number;
    PS3SimulationTime3:       number;
    PS3SimulationTime4:       number;
    PS3SimulationTime5:       number;
    Patch:                    number;
    ResetByLookAt:            number;
    RootFollowingCutScene:    string;
    RootFollowingGame:        string;
    SimulationTime0:          number;
    SimulationTime1:          number;
    SimulationTime2:          number;
    SimulationTime3:          number;
    SimulationTime4:          number;
    SimulationTime5:          number;
    Url:                      string;
  }
  
  export type GamePatch = {
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
  
}

export type PhysicsGroup = PhysicsGroupNS.PhysicsGroup;
