
export namespace ChocoboRaceTerritoryIndexNS {
  export type ChocoboRaceTerritoryIndex = {
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
    Icon: string;
    Name: Name | null;
    Url:  string;
  }
  
  export type Name = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
}

export type Index = ChocoboRaceTerritoryIndexNS.ChocoboRaceTerritoryIndex;

export namespace ChocoboRaceTerritoryNS {
  export type ChocoboRaceTerritory = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Icon:             string;
    IconID:           number;
    Name:             Name;
    NameTarget:       string;
    NameTargetID:     number;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    ChocoboRace: ChocoboRace;
  }
  
  export type ChocoboRace = {
    ChocoboRaceTerritory: number[];
  }
  
  export type Name = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
}

export type ChocoboRaceTerritory = ChocoboRaceTerritoryNS.ChocoboRaceTerritory;
