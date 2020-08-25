export interface FateIndex {
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
  Icon: Icon;
  Name: string;
  Url:  string;
}

export enum Icon {
  FFatePNG = "/f/fate.png",
}


export interface Fate1 {
  AdventEvent:                 number;
  ArrayIndex:                  null;
  ArrayIndexTarget:            string;
  ArrayIndexTargetID:          number;
  ClassJobLevel:               number;
  ClassJobLevelMax:            number;
  Description:                 string;
  Description_de:              string;
  Description_en:              string;
  Description_fr:              string;
  Description_ja:              string;
  EurekaFate:                  number;
  EventItem:                   null;
  EventItemTarget:             string;
  EventItemTargetID:           number;
  FATEChain:                   number;
  FateRuleEx:                  null;
  FateRuleExTarget:            string;
  FateRuleExTargetID:          number;
  GameContentLinks:            any[];
  GivenStatus:                 null;
  GivenStatusTarget:           string;
  GivenStatusTargetID:         number;
  ID:                          number;
  Icon:                        string;
  IconInactiveMap:             string;
  IconInactiveMapID:           number;
  IconMap:                     string;
  IconMapID:                   number;
  IconObjective:               string;
  IconObjectiveID:             number;
  LGBGuardNPCLocation:         number;
  Location:                    number;
  MoonFaireEvent:              number;
  Music:                       null;
  MusicTarget:                 string;
  MusicTargetID:               number;
  Name:                        string;
  Name_de:                     string;
  Name_en:                     string;
  Name_fr:                     string;
  Name_ja:                     string;
  Objective:                   string;
  ObjectiveIcon0:              string;
  ObjectiveIcon0ID:            number;
  ObjectiveIcon1:              string;
  ObjectiveIcon1ID:            number;
  ObjectiveIcon2:              string;
  ObjectiveIcon2ID:            number;
  ObjectiveIcon3:              string;
  ObjectiveIcon3ID:            number;
  ObjectiveIcon4:              string;
  ObjectiveIcon4ID:            number;
  ObjectiveIcon5:              string;
  ObjectiveIcon5ID:            number;
  ObjectiveIcon6:              string;
  ObjectiveIcon6ID:            number;
  ObjectiveIcon7:              string;
  ObjectiveIcon7ID:            number;
  Objective_de:                string;
  Objective_en:                string;
  Objective_fr:                string;
  Objective_ja:                string;
  Patch:                       null;
  ReqEventItem:                null;
  ReqEventItemTarget:          string;
  ReqEventItemTargetID:        number;
  Rule:                        number;
  ScreenImageAccept:           null;
  ScreenImageAcceptTarget:     string;
  ScreenImageAcceptTargetID:   number;
  ScreenImageComplete:         null;
  ScreenImageCompleteTarget:   string;
  ScreenImageCompleteTargetID: number;
  ScreenImageFailed:           null;
  ScreenImageFailedTarget:     string;
  ScreenImageFailedTargetID:   number;
  SpecialFate:                 number;
  StatusText0:                 string;
  StatusText0_de:              string;
  StatusText0_en:              string;
  StatusText0_fr:              string;
  StatusText0_ja:              string;
  StatusText1:                 string;
  StatusText1_de:              string;
  StatusText1_en:              string;
  StatusText1_fr:              string;
  StatusText1_ja:              string;
  StatusText2:                 string;
  StatusText2_de:              string;
  StatusText2_en:              string;
  StatusText2_fr:              string;
  StatusText2_ja:              string;
  TurnInEventItem:             null;
  TurnInEventItemTarget:       string;
  TurnInEventItemTargetID:     number;
  TypeToDoValue0:              number;
  TypeToDoValue1:              number;
  TypeToDoValue2:              number;
  Url:                         string;
}
