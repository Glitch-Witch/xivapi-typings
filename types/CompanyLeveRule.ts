export interface CompanyLeveRuleIndex {
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


export interface CompanyLeveRule1 {
  GameContentLinks:  GameContentLinks;
  GamePatch:         GamePatch;
  Help:              Help;
  HelpTarget:        string;
  HelpTargetID:      number;
  ID:                number;
  Objective:         Help;
  ObjectiveTarget:   string;
  ObjectiveTargetID: number;
  Patch:             number;
  Type:              string;
  Type_en:           string;
  Url:               string;
}

export interface GameContentLinks {
  CompanyLeve: CompanyLeve;
}

export interface CompanyLeve {
  CompanyLeveRule: number[];
  Rule:            number[];
}

export interface GamePatch {
  Banner:      string;
  ExName:      string;
  ExVersion:   number;
  ID:          number;
  Name:        string;
  Name_cn:     string;
  Name_de:     string;
  Name_en:     string;
  Name_fr:     string;
  Name_ja:     string;
  Name_kr:     string;
  ReleaseDate: number;
  Version:     string;
}

export interface Help {
  ID:           number;
  Objective:    string;
  Objective_de: string;
  Objective_en: string;
  Objective_fr: string;
  Objective_ja: string;
}
