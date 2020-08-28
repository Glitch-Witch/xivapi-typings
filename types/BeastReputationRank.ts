
export namespace BeastReputationRankIndexNS {
  export type BeastReputationRankIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = BeastReputationRankIndexNS.BeastReputationRankIndex;

export namespace BeastReputationRankNS {
  export type BeastReputationRank = {
    AlliedNames:        string;
    AlliedNames_de:     string;
    AlliedNames_en:     string;
    AlliedNames_fr:     string;
    AlliedNames_ja:     string;
    Color:              Color;
    ColorTarget:        string;
    ColorTargetID:      number;
    GameContentLinks:   GameContentLinks;
    ID:                 number;
    Name:               string;
    Name_de:            string;
    Name_en:            string;
    Name_fr:            string;
    Name_ja:            string;
    Patch:              null;
    RequiredReputation: number;
    Url:                string;
  }
  
  export type Color = {
    ID:           number;
    UIForeground: string;
    UIGlow:       number;
  }
  
  export type GameContentLinks = {
    Quest: Quest;
  }
  
  export type Quest = {
    BeastReputationRank: number[];
  }
  
}

export type BeastReputationRank = BeastReputationRankNS.BeastReputationRank;
