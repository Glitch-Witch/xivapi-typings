
export namespace ChocoboRaceTutorialIndexNS {
  export type ChocoboRaceTutorialIndex = {
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

export type Index = ChocoboRaceTutorialIndexNS.ChocoboRaceTutorialIndex;

export namespace ChocoboRaceTutorialNS {
  export type ChocoboRaceTutorial = {
    GameContentLinks: any[];
    ID:               number;
    NpcYell0:         null;
    NpcYell0Target:   string;
    NpcYell0TargetID: number;
    NpcYell1:         null;
    NpcYell1Target:   string;
    NpcYell1TargetID: number;
    NpcYell2:         null;
    NpcYell2Target:   string;
    NpcYell2TargetID: number;
    NpcYell3:         null;
    NpcYell3Target:   string;
    NpcYell3TargetID: number;
    NpcYell4:         null;
    NpcYell4Target:   string;
    NpcYell4TargetID: number;
    NpcYell5:         null;
    NpcYell5Target:   string;
    NpcYell5TargetID: number;
    NpcYell6:         null;
    NpcYell6Target:   string;
    NpcYell6TargetID: number;
    NpcYell7:         null;
    NpcYell7Target:   string;
    NpcYell7TargetID: number;
    Patch:            null;
    Url:              string;
  }
  
}

export type ChocoboRaceTutorial = ChocoboRaceTutorialNS.ChocoboRaceTutorial;
