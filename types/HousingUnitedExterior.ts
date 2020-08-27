export interface HousingUnitedExteriorIndex {
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


export interface HousingUnitedExterior {
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               number;
  Item0:            null;
  Item0Target:      string;
  Item0TargetID:    number;
  Item1:            null;
  Item1Target:      string;
  Item1TargetID:    number;
  Item2:            null;
  Item2Target:      string;
  Item2TargetID:    number;
  Item3:            null;
  Item3Target:      string;
  Item3TargetID:    number;
  Item4:            null;
  Item4Target:      string;
  Item4TargetID:    number;
  Item5:            null;
  Item5Target:      string;
  Item5TargetID:    number;
  Item6:            null;
  Item6Target:      string;
  Item6TargetID:    number;
  Item7:            null;
  Item7Target:      string;
  Item7TargetID:    number;
  Patch:            number;
  Url:              string;
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
