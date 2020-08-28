
export namespace InstanceContentCSBonusIndexNS {
  export type InstanceContentCSBonusIndex = {
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
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = InstanceContentCSBonusIndexNS.InstanceContentCSBonusIndex;

export namespace InstanceContentCSBonusNS {
  export type InstanceContentCSBonus = {
    GameContentLinks: any[];
    ID:               number;
    Instance:         Instance;
    InstanceTarget:   string;
    InstanceTargetID: number;
    Item:             Item;
    ItemTarget:       string;
    ItemTargetID:     number;
    Patch:            null;
    Url:              string;
  }
  
  export type Instance = {
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
    ReqInstance:                                   null;
    ReqInstanceTarget:                             string;
    ReqInstanceTargetID:                           number;
    SortKey:                                       number;
    TimeLimitMin:                                  number;
    WeekRestriction:                               number;
    WinBGM:                                        Bgm;
    WinBGMTarget:                                  string;
    WinBGMTargetID:                                number;
  }
  
  export type Bgm = {
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
  
  export type Cutscene = {
    ID:      number;
    Path:    string;
    Path_en: string;
  }
  
  export type InstanceContentTextDataObjective = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
  export type InstanceContentType = {
    ID: number;
  }
  
  export type Item = {
    AdditionalData:             number;
    Adjective:                  number;
    AetherialReduce:            number;
    AlwaysCollectable:          number;
    Article:                    number;
    BaseParam0:                 null;
    BaseParam0Target:           string;
    BaseParam0TargetID:         number;
    BaseParam1:                 null;
    BaseParam1Target:           string;
    BaseParam1TargetID:         number;
    BaseParam2:                 null;
    BaseParam2Target:           string;
    BaseParam2TargetID:         number;
    BaseParam3:                 null;
    BaseParam3Target:           string;
    BaseParam3TargetID:         number;
    BaseParam4:                 null;
    BaseParam4Target:           string;
    BaseParam4TargetID:         number;
    BaseParam5:                 null;
    BaseParam5Target:           string;
    BaseParam5TargetID:         number;
    BaseParamModifier:          number;
    BaseParamSpecial0:          null;
    BaseParamSpecial0Target:    string;
    BaseParamSpecial0TargetID:  number;
    BaseParamSpecial1:          null;
    BaseParamSpecial1Target:    string;
    BaseParamSpecial1TargetID:  number;
    BaseParamSpecial2:          null;
    BaseParamSpecial2Target:    string;
    BaseParamSpecial2TargetID:  number;
    BaseParamSpecial3:          null;
    BaseParamSpecial3Target:    string;
    BaseParamSpecial3TargetID:  number;
    BaseParamSpecial4:          null;
    BaseParamSpecial4Target:    string;
    BaseParamSpecial4TargetID:  number;
    BaseParamSpecial5:          null;
    BaseParamSpecial5Target:    string;
    BaseParamSpecial5TargetID:  number;
    BaseParamValue0:            number;
    BaseParamValue1:            number;
    BaseParamValue2:            number;
    BaseParamValue3:            number;
    BaseParamValue4:            number;
    BaseParamValue5:            number;
    BaseParamValueSpecial0:     number;
    BaseParamValueSpecial1:     number;
    BaseParamValueSpecial2:     number;
    BaseParamValueSpecial3:     number;
    BaseParamValueSpecial4:     number;
    BaseParamValueSpecial5:     number;
    Block:                      number;
    BlockRate:                  number;
    CanBeHq:                    number;
    ClassJobCategory:           null;
    ClassJobCategoryTarget:     string;
    ClassJobCategoryTargetID:   number;
    ClassJobRepair:             null;
    ClassJobRepairTarget:       string;
    ClassJobRepairTargetID:     number;
    ClassJobUse:                null;
    ClassJobUseTarget:          string;
    ClassJobUseTargetID:        number;
    CooldownS:                  number;
    DamageMag:                  number;
    DamagePhys:                 number;
    DefenseMag:                 number;
    DefensePhys:                number;
    DelayMs:                    number;
    Description:                string;
    Description_de:             string;
    Description_en:             string;
    Description_fr:             string;
    Description_ja:             string;
    Desynth:                    number;
    EquipRestriction:           number;
    EquipSlotCategory:          null;
    EquipSlotCategoryTarget:    string;
    EquipSlotCategoryTargetID:  number;
    FilterGroup:                number;
    GrandCompany:               null;
    GrandCompanyTarget:         string;
    GrandCompanyTargetID:       number;
    ID:                         number;
    Icon:                       string;
    IconID:                     number;
    IsAdvancedMeldingPermitted: number;
    IsCollectable:              number;
    IsCrestWorthy:              number;
    IsDyeable:                  number;
    IsGlamourous:               number;
    IsIndisposable:             number;
    IsPvP:                      number;
    IsUnique:                   number;
    IsUntradable:               number;
    ItemAction:                 null;
    ItemActionTarget:           string;
    ItemActionTargetID:         number;
    ItemGlamour:                null;
    ItemGlamourTarget:          string;
    ItemGlamourTargetID:        number;
    ItemRepair:                 null;
    ItemRepairTarget:           string;
    ItemRepairTargetID:         number;
    ItemSearchCategory:         null;
    ItemSearchCategoryTarget:   string;
    ItemSearchCategoryTargetID: number;
    ItemSeries:                 null;
    ItemSeriesTarget:           string;
    ItemSeriesTargetID:         number;
    ItemSortCategory:           null;
    ItemSortCategoryTarget:     string;
    ItemSortCategoryTargetID:   null;
    ItemSortCatgegory:          number;
    ItemSpecialBonus:           null;
    ItemSpecialBonusParam:      number;
    ItemSpecialBonusTarget:     string;
    ItemSpecialBonusTargetID:   number;
    ItemUICategory:             ItemUICategory;
    ItemUICategoryTarget:       string;
    ItemUICategoryTargetID:     number;
    LevelEquip:                 number;
    LevelItem:                  number;
    Lot:                        number;
    MateriaSlotCount:           number;
    MaterializeType:            number;
    ModelMain:                  string;
    ModelSub:                   string;
    Name:                       string;
    Name_de:                    string;
    Name_en:                    string;
    Name_fr:                    string;
    Name_ja:                    string;
    Plural:                     string;
    Plural_de:                  string;
    Plural_en:                  string;
    Plural_fr:                  string;
    Plural_ja:                  string;
    PossessivePronoun:          number;
    PriceLow:                   number;
    PriceMid:                   number;
    Pronoun:                    number;
    Rarity:                     number;
    Singular:                   string;
    Singular_de:                string;
    Singular_en:                string;
    Singular_fr:                string;
    Singular_ja:                string;
    StackSize:                  number;
    StartsWithVowel:            number;
  }
  
  export type ItemUICategory = {
    ID:         number;
    Icon:       string;
    IconID:     number;
    Name:       string;
    Name_de:    string;
    Name_en:    string;
    Name_fr:    string;
    Name_ja:    string;
    OrderMajor: number;
    OrderMinor: number;
  }
  
}

export type InstanceContentCSBonus = InstanceContentCSBonusNS.InstanceContentCSBonus;
