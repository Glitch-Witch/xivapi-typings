
export namespace MountIndexNS {
  export type MountIndex = {
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

export type Index = MountIndexNS.MountIndex;

export namespace MountNS {
  export type Mount = {
    Adjective:                       number;
    Article:                         number;
    BaseMotionSpeed_Run:             number;
    BaseMotionSpeed_Walk:            number;
    Description:                     string;
    DescriptionEnhanced:             string;
    DescriptionEnhanced_de:          string;
    DescriptionEnhanced_en:          string;
    DescriptionEnhanced_fr:          string;
    DescriptionEnhanced_ja:          string;
    Description_de:                  string;
    Description_en:                  string;
    Description_fr:                  string;
    Description_ja:                  string;
    EquipBody:                       number;
    EquipFoot:                       number;
    EquipHead:                       number;
    EquipLeg:                        number;
    ExHotbarEnableConfig:            number;
    ExitMoveDist:                    number;
    ExitMoveSpeed:                   number;
    ExtraSeats:                      number;
    FlyingCondition:                 FlyingCondition;
    FlyingConditionTarget:           string;
    FlyingConditionTargetID:         number;
    GameContentLinks:                GameContentLinks;
    GamePatch:                       GamePatch;
    ID:                              number;
    Icon:                            string;
    IconID:                          number;
    IconSmall:                       string;
    IsAirborne:                      number;
    IsEmote:                         number;
    IsFlying:                        number;
    IsImmobile:                      number;
    ModelChara:                      ModelChara;
    ModelCharaTarget:                string;
    ModelCharaTargetID:              number;
    MountAction:                     null;
    MountActionTarget:               string;
    MountActionTargetID:             number;
    MountCustomize:                  { [key: string]: number };
    MountCustomizeTarget:            string;
    MountCustomizeTargetID:          number;
    Name:                            string;
    Name_de:                         string;
    Name_en:                         string;
    Name_fr:                         string;
    Name_ja:                         string;
    Order:                           number;
    Patch:                           number;
    Plural:                          string;
    Plural_de:                       string;
    Plural_en:                       string;
    Plural_fr:                       string;
    Plural_ja:                       string;
    PossessivePronoun:               number;
    Pronoun:                         number;
    RadiusRate:                      number;
    RideBGM:                         RideBGM;
    RideBGMTarget:                   string;
    RideBGMTargetID:                 number;
    StartsWithVowel:                 number;
    Tooltip:                         string;
    Tooltip_de:                      string;
    Tooltip_en:                      string;
    Tooltip_fr:                      string;
    Tooltip_ja:                      string;
    TransientDescription:            string;
    TransientDescriptionEnhanced:    string;
    TransientDescriptionEnhanced_de: string;
    TransientDescriptionEnhanced_en: string;
    TransientDescriptionEnhanced_fr: string;
    TransientDescriptionEnhanced_ja: string;
    TransientDescription_de:         string;
    TransientDescription_en:         string;
    TransientDescription_fr:         string;
    TransientDescription_ja:         string;
    TransientTooltip:                string;
    TransientTooltip_de:             string;
    TransientTooltip_en:             string;
    TransientTooltip_fr:             string;
    TransientTooltip_ja:             string;
    UIPriority:                      number;
    Url:                             string;
    UseEP:                           number;
  }
  
  export type FlyingCondition = {
    ID:            number;
    Quest:         { [key: string]: number | { [key: string]: number | string } | null | string };
    QuestTarget:   string;
    QuestTargetID: number;
  }
  
  export type GameContentLinks = {
    Quest: QuestClass;
  }
  
  export type QuestClass = {
    MountRequired: number[];
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
  
  export type ModelChara = {
    Base:         number;
    ID:           number;
    Model:        number;
    PapVariation: number;
    SEPack:       number;
    Type:         number;
    Variant:      number;
  }
  
  export type RideBGM = {
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
  
}

export type Mount = MountNS.Mount;
