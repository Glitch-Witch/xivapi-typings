
export namespace HousingEmploymentNpcRaceIndexNS {
  export type HousingEmploymentNpcRaceIndex = {
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

export type Index = HousingEmploymentNpcRaceIndexNS.HousingEmploymentNpcRaceIndex;

export namespace HousingEmploymentNpcRaceNS {
  export type HousingEmploymentNpcRace = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Race:             string;
    Race_de:          string;
    Race_en:          string;
    Race_fr:          string;
    Race_ja:          string;
    Url:              string;
  }
  
  export type GameContentLinks = {
    HousingEmploymentNpcList: HousingEmploymentNpcList;
  }
  
  export type HousingEmploymentNpcList = {
    Race: string[];
  }
  
}

export type HousingEmploymentNpcRace = HousingEmploymentNpcRaceNS.HousingEmploymentNpcRace;
