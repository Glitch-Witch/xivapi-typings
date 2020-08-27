export interface AirshipExplorationPointIndex {
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
  Name: string;
  Url:  string;
}


export interface AirshipExplorationPoint {
  DurationMin:          number;
  ExpReward:            number;
  GameContentLinks:     any[];
  ID:                   number;
  Name:                 string;
  NameShort:            string;
  NameShort_de:         string;
  NameShort_en:         string;
  NameShort_fr:         string;
  NameShort_ja:         string;
  Name_de:              string;
  Name_en:              string;
  Name_fr:              string;
  Name_ja:              string;
  Patch:                null;
  RequiredFuel:         number;
  RequiredLevel:        number;
  RequiredSurveillance: number;
  Url:                  string;
}
