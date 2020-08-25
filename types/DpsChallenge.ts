export interface DpsChallengeIndex {
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


export interface DpsChallenge1 {
  Description:                      string;
  Description_de:                   string;
  Description_en:                   string;
  Description_fr:                   string;
  Description_ja:                   string;
  GameContentLinks:                 GameContentLinks;
  GamePatch:                        GamePatch;
  ID:                               number;
  Icon:                             string;
  IconID:                           number;
  InstanceContent:                  InstanceContent;
  InstanceContentTarget:            string;
  InstanceContentTargetID:          number;
  Name:                             string;
  Name_de:                          string;
  Name_en:                          string;
  Name_fr:                          string;
  Name_ja:                          string;
  Order:                            number;
  Patch:                            number;
  PlaceName:                        PlaceName;
  PlaceNameTarget:                  string;
  PlaceNameTargetID:                number;
  PlayerLevel:                      number;
  TransientInstanceContent:         InstanceContent;
  TransientInstanceContentTarget:   string;
  TransientInstanceContentTargetID: number;
  Url:                              string;
}

export interface GameContentLinks {
  DpsChallengeOfficer: DpsChallengeOfficer;
}

export interface DpsChallengeOfficer {
  ChallengeName0: number[];
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

export interface InstanceContent {
  BGM:                                           Bgm;
  BGMTarget:                                     string;
  BGMTargetID:                                   number;
  BNpcBaseBoss:                                  null;
  BNpcBaseBossTarget:                            string;
  BNpcBaseBossTargetID:                          number;
  BossCurrencyA0:                                number;
  BossCurrencyA1:                                number;
  BossCurrencyA2:                                number;
  BossCurrencyA3:                                number;
  BossCurrencyA4:                                number;
  BossCurrencyB0:                                number;
  BossCurrencyB1:                                number;
  BossCurrencyB2:                                number;
  BossCurrencyB3:                                number;
  BossCurrencyB4:                                number;
  BossCurrencyC0:                                number;
  BossCurrencyC1:                                number;
  BossCurrencyC2:                                number;
  BossCurrencyC3:                                number;
  BossCurrencyC4:                                number;
  BossExp0:                                      number;
  BossExp1:                                      number;
  BossExp2:                                      number;
  BossExp3:                                      number;
  BossExp4:                                      number;
  Colosseum:                                     null;
  ColosseumTarget:                               string;
  ColosseumTargetID:                             number;
  Cutscene:                                      Cutscene;
  CutsceneTarget:                                string;
  CutsceneTargetID:                              number;
  FinalBossCurrencyA:                            number;
  FinalBossCurrencyB:                            number;
  FinalBossCurrencyC:                            number;
  FinalBossExp:                                  number;
  ID:                                            number;
  InstanceClearExp:                              number;
  InstanceClearGil:                              number;
  InstanceContentBuff:                           null;
  InstanceContentBuffTarget:                     string;
  InstanceContentBuffTargetID:                   number;
  InstanceContentRewardItem:                     null;
  InstanceContentRewardItemTarget:               string;
  InstanceContentRewardItemTargetID:             number;
  InstanceContentTextDataBossEnd:                null;
  InstanceContentTextDataBossEndTarget:          string;
  InstanceContentTextDataBossEndTargetID:        number;
  InstanceContentTextDataBossStart:              null;
  InstanceContentTextDataBossStartTarget:        string;
  InstanceContentTextDataBossStartTargetID:      number;
  InstanceContentTextDataObjectiveEnd:           InstanceContentTextDataObjective;
  InstanceContentTextDataObjectiveEndTarget:     string;
  InstanceContentTextDataObjectiveEndTargetID:   number;
  InstanceContentTextDataObjectiveStart:         InstanceContentTextDataObjective;
  InstanceContentTextDataObjectiveStartTarget:   string;
  InstanceContentTextDataObjectiveStartTargetID: number;
  InstanceContentType:                           InstanceContentType;
  InstanceContentTypeTarget:                     string;
  InstanceContentTypeTargetID:                   number;
  NewPlayerBonusA:                               number;
  NewPlayerBonusB:                               number;
  Order:                                         number;
  PartyCondition:                                string;
  ReqInstance:                                   ReqInstance;
  ReqInstanceTarget:                             string;
  ReqInstanceTargetID:                           number;
  SortKey:                                       number;
  TimeLimitMin:                                  number;
  WeekRestriction:                               number;
  WinBGM:                                        Bgm;
  WinBGMTarget:                                  string;
  WinBGMTargetID:                                number;
}

export interface Bgm {
  DisableRestart:          number;
  DisableRestartResetTime: number;
  DisableRestartTimeOut:   number;
  File:                    string;
  File_en:                 string;
  ID:                      number;
  PassEnd:                 number;
  Priority:                number;
  SpecialMode:             number;
}

export interface Cutscene {
  ID:      number;
  Path:    string;
  Path_en: string;
}

export interface InstanceContentTextDataObjective {
  ID:      number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}

export interface InstanceContentType {
  ID: number;
}

export interface ReqInstance {
  BGM:                                   number;
  BNpcBaseBoss:                          number;
  BossCurrencyA0:                        number;
  BossCurrencyA1:                        number;
  BossCurrencyA2:                        number;
  BossCurrencyA3:                        number;
  BossCurrencyA4:                        number;
  BossCurrencyB0:                        number;
  BossCurrencyB1:                        number;
  BossCurrencyB2:                        number;
  BossCurrencyB3:                        number;
  BossCurrencyB4:                        number;
  BossCurrencyC0:                        number;
  BossCurrencyC1:                        number;
  BossCurrencyC2:                        number;
  BossCurrencyC3:                        number;
  BossCurrencyC4:                        number;
  BossExp0:                              number;
  BossExp1:                              number;
  BossExp2:                              number;
  BossExp3:                              number;
  BossExp4:                              number;
  Colosseum:                             number;
  Cutscene:                              number;
  FinalBossCurrencyA:                    number;
  FinalBossCurrencyB:                    number;
  FinalBossCurrencyC:                    number;
  FinalBossExp:                          number;
  ID:                                    number;
  InstanceClearExp:                      number;
  InstanceClearGil:                      number;
  InstanceContentBuff:                   number;
  InstanceContentRewardItem:             number;
  InstanceContentTextDataBossEnd:        number;
  InstanceContentTextDataBossStart:      number;
  InstanceContentTextDataObjectiveEnd:   number;
  InstanceContentTextDataObjectiveStart: number;
  InstanceContentType:                   number;
  NewPlayerBonusA:                       number;
  NewPlayerBonusB:                       number;
  Order:                                 number;
  PartyCondition:                        string;
  ReqInstance:                           number;
  SortKey:                               number;
  TimeLimitMin:                          number;
  WeekRestriction:                       number;
  WinBGM:                                number;
}

export interface PlaceName {
  ID:               number;
  Icon:             string;
  Name:             string;
  NameNoArticle:    string;
  NameNoArticle_de: string;
  NameNoArticle_en: string;
  NameNoArticle_fr: string;
  NameNoArticle_ja: string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
}
