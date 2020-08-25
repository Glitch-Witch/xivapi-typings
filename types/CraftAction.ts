export interface CraftActionIndex {
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
  Icon: string;
  Name: string;
  Url:  string;
}


export interface CraftAction100000 {
  ALC:                      null;
  ALCTarget:                string;
  ALCTargetID:              number;
  ARM:                      null;
  ARMTarget:                string;
  ARMTargetID:              number;
  AnimationEnd:             null;
  AnimationEndTarget:       string;
  AnimationEndTargetID:     number;
  AnimationStart:           null;
  AnimationStartTarget:     string;
  AnimationStartTargetID:   number;
  BSM:                      null;
  BSMTarget:                string;
  BSMTargetID:              number;
  CRP:                      null;
  CRPTarget:                string;
  CRPTargetID:              number;
  CUL:                      null;
  CULTarget:                string;
  CULTargetID:              number;
  ClassJob:                 null;
  ClassJobCategory:         null;
  ClassJobCategoryTarget:   string;
  ClassJobCategoryTargetID: number;
  ClassJobLevel:            number;
  ClassJobTarget:           string;
  ClassJobTargetID:         number;
  Cost:                     number;
  Description:              string;
  DescriptionJSON_cn:       null;
  DescriptionJSON_kr:       null;
  Description_cn:           null;
  Description_de:           string;
  Description_en:           string;
  Description_fr:           string;
  Description_ja:           string;
  Description_kr:           null;
  GSM:                      null;
  GSMTarget:                string;
  GSMTargetID:              number;
  GameContentLinks:         any[];
  GamePatch:                GamePatch;
  ID:                       number;
  Icon:                     string;
  IconID:                   number;
  LTW:                      null;
  LTWTarget:                string;
  LTWTargetID:              number;
  Name:                     string;
  Name_de:                  string;
  Name_en:                  string;
  Name_fr:                  string;
  Name_ja:                  string;
  Patch:                    number;
  QuestRequirement:         null;
  QuestRequirementTarget:   string;
  QuestRequirementTargetID: number;
  Specialist:               number;
  Url:                      string;
  WVR:                      null;
  WVRTarget:                string;
  WVRTargetID:              number;
}

export interface GamePatch {
  Banner:      string;
  ExName:      string;
  ExVersion:   number;
  ID:          number;
  Name:        string;
  Name_cn:     string;
  Name_de:     string;
  Name_en:     string;
  Name_fr:     string;
  Name_ja:     string;
  Name_kr:     string;
  ReleaseDate: number;
  Version:     string;
}
