export interface FishingRecordTypeIndex {
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


export interface FishingRecordType {
  Addon:              Addon;
  AddonTarget:        string;
  AddonTargetID:      number;
  GameContentLinks:   GameContentLinks;
  ID:                 number;
  Patch:              null;
  RankAAARequirement: number;
  RankAARequirement:  number;
  RankARequirement:   number;
  RankBRequirement:   number;
  Url:                string;
}

export interface Addon {
  ID:      number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}

export interface GameContentLinks {
  FishParameter: FishParameter;
}

export interface FishParameter {
  FishingRecordType: number[];
}
