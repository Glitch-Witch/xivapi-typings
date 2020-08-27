export interface HousingEmploymentNpcRaceIndex {
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


export interface HousingEmploymentNpcRace {
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

export interface GameContentLinks {
  HousingEmploymentNpcList: HousingEmploymentNpcList;
}

export interface HousingEmploymentNpcList {
  Race: string[];
}
