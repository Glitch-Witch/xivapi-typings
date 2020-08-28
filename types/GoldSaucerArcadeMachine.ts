
export namespace GoldSaucerArcadeMachineIndexNS {
  export type GoldSaucerArcadeMachineIndex = {
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

export type Index = GoldSaucerArcadeMachineIndexNS.GoldSaucerArcadeMachineIndex;

export namespace GoldSaucerArcadeMachineNS {
  export type GoldSaucerArcadeMachine = {
    Excellent:        string;
    ExcellentID:      number;
    FailImage:        string;
    FailImageID:      number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    Good:             string;
    GoodID:           number;
    Great:            string;
    GreatID:          number;
    ID:               number;
    Patch:            number;
    Poor:             string;
    PoorID:           number;
    Url:              string;
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

export type GoldSaucerArcadeMachine = GoldSaucerArcadeMachineNS.GoldSaucerArcadeMachine;
