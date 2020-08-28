
export namespace ChocoboRaceIndexNS {
  export type ChocoboRaceIndex = {
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

export type Index = ChocoboRaceIndexNS.ChocoboRaceIndex;

export namespace ChocoboRaceNS {
  export type ChocoboRace = {
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
  
  export type ChocoboRaceRank = {
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
  
  export type Name = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
  export type ChocoboRaceTerritory = {
    ID:           number;
    Icon:         string;
    IconID:       number;
    Name:         Name;
    NameTarget:   string;
    NameTargetID: number;
  }
  
}

export type ChocoboRace = ChocoboRaceNS.ChocoboRace;
