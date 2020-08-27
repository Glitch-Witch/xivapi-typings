export interface DeepDungeonMapXIndex {
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
  ID:   string;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface DeepDungeonMapX {
  DeepDungeonRoom0:         null;
  DeepDungeonRoom0Target:   string;
  DeepDungeonRoom0TargetID: number;
  DeepDungeonRoom1:         DeepDungeonRoom;
  DeepDungeonRoom1Target:   string;
  DeepDungeonRoom1TargetID: number;
  DeepDungeonRoom2:         DeepDungeonRoom;
  DeepDungeonRoom2Target:   string;
  DeepDungeonRoom2TargetID: number;
  DeepDungeonRoom3:         DeepDungeonRoom;
  DeepDungeonRoom3Target:   string;
  DeepDungeonRoom3TargetID: number;
  DeepDungeonRoom4:         null;
  DeepDungeonRoom4Target:   string;
  DeepDungeonRoom4TargetID: number;
  GameContentLinks:         any[];
  GamePatch:                GamePatch;
  ID:                       string;
  Patch:                    number;
  Url:                      string;
}

export interface DeepDungeonRoom {
  ID:             number;
  Level0:         null;
  Level0Target:   string;
  Level0TargetID: number;
  Level1:         null;
  Level1Target:   string;
  Level1TargetID: number;
  Level2:         null;
  Level2Target:   string;
  Level2TargetID: number;
  Level3:         null;
  Level3Target:   string;
  Level3TargetID: number;
  Level4:         null;
  Level4Target:   string;
  Level4TargetID: number;
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
