
export namespace BNpcBaseIndexNS {
  export type BNpcBaseIndex = {
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

export type Index = BNpcBaseIndexNS.BNpcBaseIndex;

export namespace BNpcBaseNS {
  export type BNpcBase = {
    ArrayEventHandler:         null;
    ArrayEventHandlerTarget:   string;
    ArrayEventHandlerTargetID: number;
    BNpcCustomize:             BNpcCustomize;
    BNpcCustomizeTarget:       string;
    BNpcCustomizeTargetID:     number;
    BNpcParts:                 null;
    BNpcPartsTarget:           string;
    BNpcPartsTargetID:         number;
    Battalion:                 Battalion;
    BattalionTarget:           string;
    BattalionTargetID:         number;
    Behavior:                  null;
    BehaviorTarget:            string;
    BehaviorTargetID:          number;
    GameContentLinks:          any[];
    ID:                        number;
    IsDisplayLevel:            number;
    IsTargetLine:              number;
    LinkRace:                  null;
    LinkRaceTarget:            string;
    LinkRaceTargetID:          number;
    ModelChara:                null;
    ModelCharaTarget:          string;
    ModelCharaTargetID:        number;
    NpcEquip:                  NpcEquip;
    NpcEquipTarget:            string;
    NpcEquipTargetID:          number;
    Patch:                     null;
    Rank:                      number;
    SEPack:                    number;
    Scale:                     number;
    Special:                   number;
    Url:                       string;
  }
  
  export type BNpcCustomize = {
    BodyType:            number;
    BustOrTone1:         number;
    ExtraFeature1:       number;
    ExtraFeature2OrBust: number;
    EyeColor:            number;
    EyeHeterochromia:    number;
    EyeShape:            number;
    Eyebrows:            number;
    Face:                number;
    FacePaint:           number;
    FacePaintColor:      number;
    FacialFeature:       number;
    FacialFeatureColor:  number;
    Gender:              number;
    HairColor:           number;
    HairHighlight:       number;
    HairHighlightColor:  number;
    HairStyle:           number;
    Height:              number;
    ID:                  number;
    Jaw:                 number;
    LipColor:            number;
    Mouth:               number;
    Nose:                number;
    Race:                Race;
    RaceTarget:          string;
    RaceTargetID:        number;
    SkinColor:           number;
    Tribe:               Tribe;
    TribeTarget:         string;
    TribeTargetID:       number;
  }
  
  export type Race = {
    ExPac:             null;
    ExPacTarget:       string;
    ExPacTargetID:     number;
    ID:                number;
    Name:              string;
    NameFemale:        string;
    NameFemale_de:     string;
    NameFemale_en:     string;
    NameFemale_fr:     string;
    NameFemale_ja:     string;
    Name_de:           string;
    Name_en:           string;
    Name_fr:           string;
    Name_ja:           string;
    RSEFBody:          Rse;
    RSEFBodyTarget:    string;
    RSEFBodyTargetID:  number;
    RSEFFeet:          Rse;
    RSEFFeetTarget:    string;
    RSEFFeetTargetID:  number;
    RSEFHands:         Rse;
    RSEFHandsTarget:   string;
    RSEFHandsTargetID: number;
    RSEFLegs:          Rse;
    RSEFLegsTarget:    string;
    RSEFLegsTargetID:  number;
    RSEMBody:          Rse;
    RSEMBodyTarget:    string;
    RSEMBodyTargetID:  number;
    RSEMFeet:          Rse;
    RSEMFeetTarget:    string;
    RSEMFeetTargetID:  number;
    RSEMHands:         Rse;
    RSEMHandsTarget:   string;
    RSEMHandsTargetID: number;
    RSEMLegs:          Rse;
    RSEMLegsTarget:    string;
    RSEMLegsTargetID:  number;
  }
  
  export type Rse = {
    AdditionalData:             number;
    Adjective:                  number;
    AetherialReduce:            number;
    AlwaysCollectable:          number;
    Article:                    number;
    BaseParam0:                 number;
    BaseParam1:                 number;
    BaseParam2:                 number;
    BaseParam3:                 number;
    BaseParam4:                 number;
    BaseParam5:                 number;
    BaseParamModifier:          number;
    BaseParamSpecial0:          number;
    BaseParamSpecial1:          number;
    BaseParamSpecial2:          number;
    BaseParamSpecial3:          number;
    BaseParamSpecial4:          number;
    BaseParamSpecial5:          number;
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
    ClassJobCategory:           number;
    ClassJobRepair:             number;
    ClassJobUse:                number;
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
    EquipSlotCategory:          number;
    FilterGroup:                number;
    GrandCompany:               number;
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
    ItemAction:                 number;
    ItemGlamour:                number;
    ItemRepair:                 number;
    ItemSearchCategory:         number;
    ItemSeries:                 number;
    ItemSortCatgegory:          number;
    ItemSpecialBonus:           number;
    ItemSpecialBonusParam:      number;
    ItemUICategory:             number;
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
  
  export type Tribe = {
    DEX:           string;
    Hp:            number;
    ID:            number;
    INT:           number;
    MND:           string;
    Mp:            number;
    Name:          string;
    NameFemale:    string;
    NameFemale_de: string;
    NameFemale_en: string;
    NameFemale_fr: string;
    NameFemale_ja: string;
    Name_de:       string;
    Name_en:       string;
    Name_fr:       string;
    Name_ja:       string;
    PIE:           number;
    STR:           number;
    VIT:           number;
  }
  
  export type Battalion = {
    ID: number;
  }
  
  export type NpcEquip = {
    DyeBody:              null;
    DyeBodyTarget:        string;
    DyeBodyTargetID:      number;
    DyeEars:              null;
    DyeEarsTarget:        string;
    DyeEarsTargetID:      number;
    DyeFeet:              null;
    DyeFeetTarget:        string;
    DyeFeetTargetID:      number;
    DyeHands:             null;
    DyeHandsTarget:       string;
    DyeHandsTargetID:     number;
    DyeHead:              null;
    DyeHeadTarget:        string;
    DyeHeadTargetID:      number;
    DyeLeftRing:          null;
    DyeLeftRingTarget:    string;
    DyeLeftRingTargetID:  number;
    DyeLegs:              null;
    DyeLegsTarget:        string;
    DyeLegsTargetID:      number;
    DyeMainHand:          null;
    DyeMainHandTarget:    string;
    DyeMainHandTargetID:  number;
    DyeNeck:              null;
    DyeNeckTarget:        string;
    DyeNeckTargetID:      number;
    DyeOffHand:           null;
    DyeOffHandTarget:     string;
    DyeOffHandTargetID:   number;
    DyeRightRing:         null;
    DyeRightRingTarget:   string;
    DyeRightRingTargetID: number;
    DyeWrists:            null;
    DyeWristsTarget:      string;
    DyeWristsTargetID:    number;
    ID:                   number;
    ModelBody:            number;
    ModelEars:            number;
    ModelFeet:            number;
    ModelHands:           number;
    ModelHead:            number;
    ModelLeftRing:        number;
    ModelLegs:            number;
    ModelMainHand:        string;
    ModelNeck:            number;
    ModelOffHand:         string;
    ModelRightRing:       number;
    ModelWrists:          number;
    Visor:                number;
  }
  
}

export type BNpcBase = BNpcBaseNS.BNpcBase;
