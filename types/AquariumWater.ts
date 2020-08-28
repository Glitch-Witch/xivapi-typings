
export namespace AquariumWaterIndexNS {
  export type AquariumWaterIndex = {
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

export type Index = AquariumWaterIndexNS.AquariumWaterIndex;

export namespace AquariumWaterNS {
  export type AquariumWater = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    AquariumFish: AquariumFish;
  }
  
  export type AquariumFish = {
    AquariumWater: number[];
  }
  
}

export type AquariumWater = AquariumWaterNS.AquariumWater;
