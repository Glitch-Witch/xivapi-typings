
export namespace ChocoboRaceAbilityTypeIndexNS {
  export type ChocoboRaceAbilityTypeIndex = {
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

export type Index = ChocoboRaceAbilityTypeIndexNS.ChocoboRaceAbilityTypeIndex;

export namespace ChocoboRaceAbilityTypeNS {
  export type ChocoboRaceAbilityType = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    IsActive:         number;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    ChocoboRaceAbility: ChocoboRaceAbility;
  }
  
  export type ChocoboRaceAbility = {
    ChocoboRaceAbilityType: number[];
  }
  
}

export type ChocoboRaceAbilityType = ChocoboRaceAbilityTypeNS.ChocoboRaceAbilityType;
