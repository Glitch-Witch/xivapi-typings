export interface ChocoboRaceAbilityTypeIndex {
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


export interface ChocoboRaceAbilityType1 {
  GameContentLinks: GameContentLinks;
  ID:               number;
  IsActive:         number;
  Patch:            null;
  Url:              string;
}

export interface GameContentLinks {
  ChocoboRaceAbility: ChocoboRaceAbility;
}

export interface ChocoboRaceAbility {
  ChocoboRaceAbilityType: number[];
}
