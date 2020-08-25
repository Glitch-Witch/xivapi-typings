export interface DeepDungeonRoomIndex {
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


export interface DeepDungeonRoom1 {
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  Level0:           null;
  Level0Target:     string;
  Level0TargetID:   number;
  Level1:           null;
  Level1Target:     string;
  Level1TargetID:   number;
  Level2:           null;
  Level2Target:     string;
  Level2TargetID:   number;
  Level3:           null;
  Level3Target:     string;
  Level3TargetID:   number;
  Level4:           null;
  Level4Target:     string;
  Level4TargetID:   number;
  Patch:            number;
  Url:              string;
}

export interface GameContentLinks {
  DeepDungeonMap5X: DeepDungeonMap5X;
}

export interface DeepDungeonMap5X {
  DeepDungeonRoom0: string[];
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
