export interface AnimaWeaponFUITalkParamIndex {
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


export interface AnimaWeaponFUITalkParam1 {
  Epilogue:         string;
  Epilogue_de:      string;
  Epilogue_en:      string;
  Epilogue_fr:      string;
  Epilogue_ja:      string;
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  Patch:            number;
  Prologue:         string;
  Prologue_de:      string;
  Prologue_en:      string;
  Prologue_fr:      string;
  Prologue_ja:      string;
  Url:              string;
}

export interface GameContentLinks {
  AnimaWeaponFUITalk: AnimaWeaponFUITalk;
}

export interface AnimaWeaponFUITalk {
  Dialogue: string[];
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
