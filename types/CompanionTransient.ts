export interface CompanionTransientIndex {
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


export interface CompanionTransient1 {
  Attack:                      number;
  Defense:                     number;
  Description:                 string;
  DescriptionEnhanced:         string;
  DescriptionEnhanced_de:      string;
  DescriptionEnhanced_en:      string;
  DescriptionEnhanced_fr:      string;
  DescriptionEnhanced_ja:      string;
  Description_de:              string;
  Description_en:              string;
  Description_fr:              string;
  Description_ja:              string;
  GameContentLinks:            any[];
  GamePatch:                   GamePatch;
  HasAreaAttack:               number;
  ID:                          number;
  MinionSkillType:             MinionSkillType;
  MinionSkillTypeTarget:       string;
  MinionSkillTypeTargetID:     number;
  Patch:                       number;
  SpecialActionDescription:    string;
  SpecialActionDescription_de: string;
  SpecialActionDescription_en: string;
  SpecialActionDescription_fr: string;
  SpecialActionDescription_ja: string;
  SpecialActionName:           string;
  SpecialActionName_de:        string;
  SpecialActionName_en:        string;
  SpecialActionName_fr:        string;
  SpecialActionName_ja:        string;
  Speed:                       number;
  StrengthArcana:              number;
  StrengthEye:                 number;
  StrengthGate:                number;
  StrengthShield:              number;
  Tooltip:                     string;
  Tooltip_de:                  string;
  Tooltip_en:                  string;
  Tooltip_fr:                  string;
  Tooltip_ja:                  string;
  Url:                         string;
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

export interface MinionSkillType {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}
