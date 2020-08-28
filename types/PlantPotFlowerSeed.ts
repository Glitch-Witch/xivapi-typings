
export namespace PlantPotFlowerSeedIndexNS {
  export type PlantPotFlowerSeedIndex = {
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

export type Index = PlantPotFlowerSeedIndexNS.PlantPotFlowerSeedIndex;

export namespace PlantPotFlowerSeedNS {
  export type PlantPotFlowerSeed = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    SeedIcon0:        string;
    SeedIcon0ID:      number;
    SeedIcon1:        string;
    SeedIcon1ID:      number;
    SeedIcon2:        string;
    SeedIcon2ID:      number;
    SeedIcon3:        string;
    SeedIcon3ID:      number;
    SeedIcon4:        string;
    SeedIcon4ID:      number;
    SeedIcon5:        string;
    SeedIcon5ID:      number;
    SeedIcon6:        string;
    SeedIcon6ID:      number;
    SeedIcon7:        string;
    SeedIcon7ID:      number;
    SeedIcon8:        string;
    SeedIcon8ID:      number;
    Url:              string;
  }
  
}

export type PlantPotFlowerSeed = PlantPotFlowerSeedNS.PlantPotFlowerSeed;
