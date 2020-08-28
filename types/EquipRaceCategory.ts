
export namespace EquipRaceCategoryIndexNS {
  export type EquipRaceCategoryIndex = {
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

export type Index = EquipRaceCategoryIndexNS.EquipRaceCategoryIndex;

export namespace EquipRaceCategoryNS {
  export type EquipRaceCategory = {
    AuRa:             number;
    Elezen:           number;
    Female:           number;
    GameContentLinks: any[];
    Hyur:             number;
    ID:               number;
    Lalafell:         number;
    Male:             number;
    "Miqo'te":        number;
    Patch:            null;
    Roegadyn:         number;
    Url:              string;
  }
  
}

export type EquipRaceCategory = EquipRaceCategoryNS.EquipRaceCategory;
