export interface ChocoboRaceRankIndex {
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
  Icon: string;
  Name: Name | null;
  Url:  string;
}

export interface Name {
  ID:      number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}


export interface ChocoboRaceRank1 {
  Fee:              number;
  GameContentLinks: GameContentLinks;
  ID:               number;
  Icon:             string;
  IconID:           number;
  Name:             Name;
  NameTarget:       string;
  NameTargetID:     number;
  Patch:            null;
  RatingMax:        number;
  RatingMin:        number;
  Url:              string;
}

export interface GameContentLinks {
  ChocoboRace: ChocoboRace;
}

export interface ChocoboRace {
  ChocoboRaceRank: number[];
}

export interface Name {
  ID:      number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}
