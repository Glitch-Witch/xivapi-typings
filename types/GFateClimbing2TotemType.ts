export interface GFateClimbing2TotemTypeIndex {
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


export interface GFateClimbing2TotemType1 {
  GameContentLinks:              any[];
  ID:                            number;
  Patch:                         null;
  PublicContentTextData:         PublicContentTextData;
  PublicContentTextDataTarget:   string;
  PublicContentTextDataTargetID: number;
  Url:                           string;
}

export interface PublicContentTextData {
  ID:          number;
  TextData:    string;
  TextData_de: string;
  TextData_en: string;
  TextData_fr: string;
  TextData_ja: string;
}
