export interface HousingAethernetIndex {
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


export interface HousingAethernet1966080 {
  GameContentLinks:      any[];
  GamePatch:             GamePatch;
  ID:                    number;
  Level:                 null;
  LevelTarget:           string;
  LevelTargetID:         number;
  Order:                 number;
  Patch:                 number;
  PlaceName:             null;
  PlaceNameTarget:       string;
  PlaceNameTargetID:     number;
  TerritoryType:         null;
  TerritoryTypeTarget:   string;
  TerritoryTypeTargetID: number;
  Url:                   string;
}

export interface GamePatch {
  Banner:        string;
  ExName:        string;
  ExVersion:     number;
  ID:            number;
  Name:          string;
  Name_cn:       string;
  Name_de:       string;
  Name_en:       string;
  Name_fr:       string;
  Name_ja:       string;
  Name_kr:       string;
  PatchNotes:    string;
  PatchNotes_de: string;
  PatchNotes_en: string;
  PatchNotes_fr: string;
  PatchNotes_ja: string;
  ReleaseDate:   number;
  Version:       string;
}