export interface DpsChallengeTransientIndex {
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


export interface DpsChallengeTransient1 {
  GameContentLinks:        any[];
  ID:                      number;
  InstanceContent:         InstanceContent;
  InstanceContentTarget:   string;
  InstanceContentTargetID: number;
  Patch:                   null;
  Url:                     string;
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
