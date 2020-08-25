export interface AnimaWeapon5ParamIndex {
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
  Name: string;
  Url:  string;
}


export interface AnimaWeapon5Param1 {
  BaseParam:         BaseParam;
  BaseParamTarget:   string;
  BaseParamTargetID: number;
  GameContentLinks:  GameContentLinks;
  GamePatch:         GamePatch;
  ID:                number;
  Name:              string;
  Name_de:           string;
  Name_en:           string;
  Name_fr:           string;
  Name_ja:           string;
  Patch:             number;
  Url:               string;
}

export interface BaseParam {
  "1HWpn%":                  number;
  "2HWpn%":                  number;
  "Bracelet%":               number;
  "Chest%":                  number;
  "ChestHead%":              number;
  "ChestHeadLegsFeet%":      number;
  "ChestLegsFeet%":          number;
  "ChestLegsGloves%":        number;
  Description:               string;
  Description_de:            string;
  Description_en:            string;
  Description_fr:            string;
  Description_ja:            string;
  "Earring%":                number;
  "Feet%":                   number;
  "Hands%":                  number;
  "Head%":                   number;
  "HeadChestHandsLegsFeet%": number;
  ID:                        number;
  "Legs%":                   number;
  "LegsFeet%":               number;
  MeldParam0:                number;
  MeldParam1:                number;
  MeldParam10:               number;
  MeldParam11:               number;
  MeldParam12:               number;
  MeldParam2:                number;
  MeldParam3:                number;
  MeldParam4:                number;
  MeldParam5:                number;
  MeldParam6:                number;
  MeldParam7:                number;
  MeldParam8:                number;
  MeldParam9:                number;
  Name:                      string;
  Name_de:                   string;
  Name_en:                   string;
  Name_fr:                   string;
  Name_ja:                   string;
  "Necklace%":               number;
  "OH%":                     number;
  OrderPriority:             number;
  PacketIndex:               number;
  "Ring%":                   number;
  "UnderArmor%":             number;
  "Waist%":                  number;
}

export interface GameContentLinks {
  AnimaWeapon5: AnimaWeapon5;
}

export interface AnimaWeapon5 {
  Parameter0: number[];
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
