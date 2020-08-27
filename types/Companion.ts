export interface CompanionIndex {
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


export interface Companion {
  Adjective:                            number;
  Article:                              number;
  Attack:                               number;
  Battle:                               number;
  Behavior:                             Behavior;
  BehaviorTarget:                       string;
  BehaviorTargetID:                     number;
  Clapping:                             number;
  Cost:                                 number;
  Defense:                              number;
  Description:                          string;
  DescriptionEnhanced:                  string;
  DescriptionEnhanced_de:               string;
  DescriptionEnhanced_en:               string;
  DescriptionEnhanced_fr:               string;
  DescriptionEnhanced_ja:               string;
  Description_de:                       string;
  Description_en:                       string;
  Description_fr:                       string;
  Description_ja:                       string;
  Enemy:                                number;
  GameContentLinks:                     any[];
  GamePatch:                            GamePatch;
  HP:                                   number;
  HasAreaAttack:                        number;
  ID:                                   number;
  Icon:                                 string;
  IconID:                               number;
  IconSmall:                            string;
  InactiveBattle:                       number;
  InactiveIdle0:                        number;
  InactiveIdle1:                        number;
  InactiveWandering:                    number;
  LookAt:                               number;
  MinionRace:                           Behavior;
  MinionRaceTarget:                     string;
  MinionRaceTargetID:                   number;
  MinionSkillType:                      Behavior;
  MinionSkillTypeTarget:                string;
  MinionSkillTypeTargetID:              number;
  Model:                                Model;
  ModelTarget:                          string;
  ModelTargetID:                        number;
  Name:                                 string;
  Name_de:                              string;
  Name_en:                              string;
  Name_fr:                              string;
  Name_ja:                              string;
  Order:                                number;
  Patch:                                number;
  Plural:                               string;
  Plural_de:                            string;
  Plural_en:                            string;
  Plural_fr:                            string;
  Plural_ja:                            string;
  Poke:                                 number;
  PossessivePronoun:                    number;
  Priority:                             number;
  Pronoun:                              number;
  Roulette:                             number;
  Scale:                                number;
  SkillAngle:                           number;
  SkillCost:                            number;
  Special:                              number;
  SpecialActionDescription:             string;
  SpecialActionDescription_de:          string;
  SpecialActionDescription_en:          string;
  SpecialActionDescription_fr:          string;
  SpecialActionDescription_ja:          string;
  SpecialActionName:                    string;
  SpecialActionName_de:                 string;
  SpecialActionName_en:                 string;
  SpecialActionName_fr:                 string;
  SpecialActionName_ja:                 string;
  Speed:                                number;
  StartsWithVowel:                      number;
  StrengthArcana:                       number;
  StrengthEye:                          number;
  StrengthGate:                         number;
  StrengthShield:                       number;
  Stroke:                               number;
  Tooltip:                              string;
  Tooltip_de:                           string;
  Tooltip_en:                           string;
  Tooltip_fr:                           string;
  Tooltip_ja:                           string;
  TransientAttack:                      number;
  TransientDefense:                     number;
  TransientDescription:                 string;
  TransientDescriptionEnhanced:         string;
  TransientDescriptionEnhanced_de:      string;
  TransientDescriptionEnhanced_en:      string;
  TransientDescriptionEnhanced_fr:      string;
  TransientDescriptionEnhanced_ja:      string;
  TransientDescription_de:              string;
  TransientDescription_en:              string;
  TransientDescription_fr:              string;
  TransientDescription_ja:              string;
  TransientHasAreaAttack:               number;
  TransientMinionSkillType:             Behavior;
  TransientMinionSkillTypeTarget:       string;
  TransientMinionSkillTypeTargetID:     number;
  TransientSpecialActionDescription:    string;
  TransientSpecialActionDescription_de: string;
  TransientSpecialActionDescription_en: string;
  TransientSpecialActionDescription_fr: string;
  TransientSpecialActionDescription_ja: string;
  TransientSpecialActionName:           string;
  TransientSpecialActionName_de:        string;
  TransientSpecialActionName_en:        string;
  TransientSpecialActionName_fr:        string;
  TransientSpecialActionName_ja:        string;
  TransientSpeed:                       number;
  TransientStrengthArcana:              number;
  TransientStrengthEye:                 number;
  TransientStrengthGate:                number;
  TransientStrengthShield:              number;
  TransientTooltip:                     string;
  TransientTooltip_de:                  string;
  TransientTooltip_en:                  string;
  TransientTooltip_fr:                  string;
  TransientTooltip_ja:                  string;
  Url:                                  string;
  WanderingWait:                        number;
}

export interface Behavior {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
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

export interface Model {
  Base:         number;
  ID:           number;
  Model:        number;
  PapVariation: number;
  SEPack:       number;
  Type:         number;
  Variant:      number;
}
