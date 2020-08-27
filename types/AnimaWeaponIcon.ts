export interface AnimaWeaponIconIndex {
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


export interface AnimaWeaponIcon {
  GameContentLinks:  any[];
  Hyperconductive:   string;
  HyperconductiveID: number;
  ID:                number;
  Patch:             null;
  Reborn:            string;
  RebornID:          number;
  Sharpened:         string;
  SharpenedID:       number;
  Url:               string;
  Zodiac:            string;
  ZodiacID:          number;
  ZodiacLux:         string;
  ZodiacLuxID:       number;
}
