export interface ChocoboRaceIndex {
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


export interface ChocoboRace1 {
  ChocoboRaceRank:              ChocoboRaceRank;
  ChocoboRaceRankTarget:        string;
  ChocoboRaceRankTargetID:      number;
  ChocoboRaceTerritory:         ChocoboRaceTerritory;
  ChocoboRaceTerritoryTarget:   string;
  ChocoboRaceTerritoryTargetID: number;
  GameContentLinks:             any[];
  ID:                           number;
  Patch:                        null;
  Url:                          string;
}

export interface ChocoboRaceRank {
  Fee:          number;
  ID:           number;
  Icon:         string;
  IconID:       number;
  Name:         Name;
  NameTarget:   string;
  NameTargetID: number;
  RatingMax:    number;
  RatingMin:    number;
}

export interface Name {
  ID:      number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}

export interface ChocoboRaceTerritory {
  ID:           number;
  Icon:         string;
  IconID:       number;
  Name:         Name;
  NameTarget:   string;
  NameTargetID: number;
}
