export interface WeatherReportReplaceIndex {
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


export interface WeatherReportReplace1 {
  GameContentLinks:        any[];
  ID:                      number;
  Patch:                   null;
  PlaceNameParent:         PlaceName;
  PlaceNameParentTarget:   string;
  PlaceNameParentTargetID: number;
  PlaceNameSub:            PlaceName;
  PlaceNameSubTarget:      string;
  PlaceNameSubTargetID:    number;
  Url:                     string;
}

export interface PlaceName {
  ID:               number;
  Icon:             string;
  Name:             string;
  NameNoArticle:    string;
  NameNoArticle_de: string;
  NameNoArticle_en: string;
  NameNoArticle_fr: string;
  NameNoArticle_ja: string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
}
