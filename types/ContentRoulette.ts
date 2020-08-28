
export namespace ContentRouletteIndexNS {
  export type ContentRouletteIndex = {
    Pagination: Pagination;
    Results:    Result[];
  }
  
  export type Pagination = {
    Page:           number;
    PageNext:       number;
    PagePrev:       number;
    PageTotal:      number;
    Results:        number;
    ResultsPerPage: number;
    ResultsTotal:   number;
  }
  
  export type Result = {
    ID:   number;
    Icon: string;
    Name: string;
    Url:  string;
  }
  
}

export type Index = ContentRouletteIndexNS.ContentRouletteIndex;

export namespace ContentRouletteNS {
  export type ContentRoulette = {
    ContentMemberType:                null;
    ContentMemberTypeTarget:          string;
    ContentMemberTypeTargetID:        number;
    ContentRouletteOpenRule:          number;
    ContentRouletteRoleBonus:         null;
    ContentRouletteRoleBonusTarget:   string;
    ContentRouletteRoleBonusTargetID: number;
    Description:                      string;
    Description_de:                   string;
    Description_en:                   string;
    Description_fr:                   string;
    Description_ja:                   string;
    DutyType:                         string;
    DutyType_de:                      string;
    DutyType_en:                      string;
    DutyType_fr:                      string;
    DutyType_ja:                      string;
    GameContentLinks:                 any[];
    GamePatch:                        GamePatch;
    ID:                               number;
    Icon:                             string;
    IconID:                           number;
    InstanceContent:                  InstanceContent;
    InstanceContentTarget:            string;
    InstanceContentTargetID:          number;
    IsInDutyFinder:                   number;
    ItemLevelRequired:                number;
    Name:                             string;
    Name_de:                          string;
    Name_en:                          string;
    Name_fr:                          string;
    Name_ja:                          string;
    OpenRule:                         OpenRule;
    OpenRuleTarget:                   string;
    OpenRuleTargetID:                 number;
    Patch:                            number;
    RequireAllDuties:                 number;
    RequiredLevel:                    number;
    RewardTomeA:                      number;
    RewardTomeB:                      number;
    RewardTomeC:                      number;
    SortKey:                          number;
    Url:                              string;
  }
  
  export type GamePatch = {
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
  
  export type InstanceContent = {
    BGM:                                           null;
    BGMTarget:                                     string;
    BGMTargetID:                                   number;
    BNpcBaseBoss:                                  BNpcBaseBoss;
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
    InstanceContentTextDataBossEnd:                InstanceContentTextData;
    InstanceContentTextDataBossEndTarget:          string;
    InstanceContentTextDataBossEndTargetID:        number;
    InstanceContentTextDataBossStart:              InstanceContentTextData;
    InstanceContentTextDataBossStartTarget:        string;
    InstanceContentTextDataBossStartTargetID:      number;
    InstanceContentTextDataObjectiveEnd:           InstanceContentTextData;
    InstanceContentTextDataObjectiveEndTarget:     string;
    InstanceContentTextDataObjectiveEndTargetID:   number;
    InstanceContentTextDataObjectiveStart:         InstanceContentTextData;
    InstanceContentTextDataObjectiveStartTarget:   string;
    InstanceContentTextDataObjectiveStartTargetID: number;
    InstanceContentType:                           InstanceContentType;
    InstanceContentTypeTarget:                     string;
    InstanceContentTypeTargetID:                   number;
    NewPlayerBonusA:                               number;
    NewPlayerBonusB:                               number;
    Order:                                         number;
    PartyCondition:                                string;
    ReqInstance:                                   null;
    ReqInstanceTarget:                             string;
    ReqInstanceTargetID:                           number;
    SortKey:                                       number;
    TimeLimitMin:                                  number;
    WeekRestriction:                               number;
    WinBGM:                                        WinBGM;
    WinBGMTarget:                                  string;
    WinBGMTargetID:                                number;
  }
  
  export type BNpcBaseBoss = {
    ArrayEventHandler:         null;
    ArrayEventHandlerTarget:   string;
    ArrayEventHandlerTargetID: number;
    BNpcCustomize:             null;
    BNpcCustomizeTarget:       string;
    BNpcCustomizeTargetID:     number;
    BNpcParts:                 null;
    BNpcPartsTarget:           string;
    BNpcPartsTargetID:         number;
    Battalion:                 InstanceContentType;
    BattalionTarget:           string;
    BattalionTargetID:         number;
    Behavior:                  null;
    BehaviorTarget:            string;
    BehaviorTargetID:          number;
    ID:                        number;
    IsDisplayLevel:            number;
    IsTargetLine:              number;
    LinkRace:                  null;
    LinkRaceTarget:            string;
    LinkRaceTargetID:          number;
    ModelChara:                ModelChara;
    ModelCharaTarget:          string;
    ModelCharaTargetID:        number;
    NpcEquip:                  NpcEquip;
    NpcEquipTarget:            string;
    NpcEquipTargetID:          number;
    Rank:                      number;
    SEPack:                    number;
    Scale:                     number;
    Special:                   number;
  }
  
  export type InstanceContentType = {
    ID: number;
  }
  
  export type ModelChara = {
    Base:         number;
    ID:           number;
    Model:        number;
    PapVariation: number;
    SEPack:       number;
    Type:         number;
    Variant:      number;
  }
  
  export type NpcEquip = {
    DyeBody:        number;
    DyeEars:        number;
    DyeFeet:        number;
    DyeHands:       number;
    DyeHead:        number;
    DyeLeftRing:    number;
    DyeLegs:        number;
    DyeMainHand:    number;
    DyeNeck:        number;
    DyeOffHand:     number;
    DyeRightRing:   number;
    DyeWrists:      number;
    ID:             number;
    ModelBody:      number;
    ModelEars:      number;
    ModelFeet:      number;
    ModelHands:     number;
    ModelHead:      number;
    ModelLeftRing:  number;
    ModelLegs:      number;
    ModelMainHand:  string;
    ModelNeck:      number;
    ModelOffHand:   string;
    ModelRightRing: number;
    ModelWrists:    number;
    Visor:          number;
  }
  
  export type Cutscene = {
    ID:      number;
    Path:    string;
    Path_en: string;
  }
  
  export type InstanceContentTextData = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
  export type WinBGM = {
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
  
  export type OpenRule = {
    ID:   number;
    Type: number;
  }
  
}

export type ContentRoulette = ContentRouletteNS.ContentRoulette;
