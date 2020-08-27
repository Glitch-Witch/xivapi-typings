export interface BeastReputationRankIndex {
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
  Name: string;
  Url:  string;
}


export interface BeastReputationRank {
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

export interface Color {
  ID:           number;
  UIForeground: string;
  UIGlow:       number;
}

export interface GameContentLinks {
  Quest: Quest;
}

export interface Quest {
  BeastReputationRank: number[];
}
