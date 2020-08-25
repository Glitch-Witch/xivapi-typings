export interface SkyIsland2MissionIndex {
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


export interface SkyIsland2Mission5 {
  GameContentLinks:   any[];
  GamePatch:          GamePatch;
  ID:                 number;
  Image:              string;
  ImageID:            number;
  Item1:              null;
  Item1Target:        string;
  Item1TargetID:      number;
  Item2:              null;
  Item2Target:        string;
  Item2TargetID:      number;
  Objective1:         Objective;
  Objective1Target:   string;
  Objective1TargetID: number;
  Objective2:         Objective;
  Objective2Target:   string;
  Objective2TargetID: number;
  Objective3:         Objective;
  Objective3Target:   string;
  Objective3TargetID: number;
  Patch:              number;
  PlaceName:          null;
  PlaceNameTarget:    string;
  PlaceNameTargetID:  number;
  PopRange0:          number;
  PopRange1:          number;
  PopRange2:          number;
  RequiredAmount1:    number;
  RequiredAmount2:    number;
  Url:                string;
}

export interface GamePatch {
  Banner:        null;
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

export interface Objective {
  EObj:          null;
  EObjTarget:    string;
  EObjTargetID:  number;
  ID:            number;
  Objective:     string;
  Objective_de:  string;
  Objective_en:  string;
  Objective_fr:  string;
  Objective_ja:  string;
  Range:         null;
  RangeTarget:   string;
  RangeTargetID: number;
  Type:          Type;
  TypeTarget:    string;
  TypeTargetID:  number;
}

export interface Type {
  ID:   number;
  Type: number;
}
