export interface InstanceContentIndex {
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
  Icon: Icon | null;
  Name: null | string;
  Url:  string;
}

export enum Icon {
  I061000061801PNG = "/i/061000/061801.png",
  I061000061805PNG = "/i/061000/061805.png",
}


export interface InstanceContent {
  BGM:                                           null;
  BGMTarget:                                     string;
  BGMTargetID:                                   number;
  BNpcBaseBoss:                                  BNpcBaseBoss;
  BNpcBaseBossTarget:                            string;
  BNpcBaseBossTargetID:                          number;
  Banner:                                        string;
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
  ContentFinderCondition:                        ContentFinderCondition;
  ContentMemberType:                             ContentMemberType;
  ContentType:                                   ContentType;
  Cutscene:                                      Cutscene;
  CutsceneTarget:                                string;
  CutsceneTargetID:                              number;
  Description:                                   string;
  Description_de:                                string;
  Description_en:                                string;
  Description_fr:                                string;
  Description_ja:                                string;
  FinalBossCurrencyA:                            number;
  FinalBossCurrencyB:                            number;
  FinalBossCurrencyC:                            number;
  FinalBossExp:                                  number;
  GameContentLinks:                              GameContentLinks;
  GamePatch:                                     GamePatch;
  ID:                                            number;
  Icon:                                          string;
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
  Name:                                          string;
  Name_de:                                       string;
  Name_en:                                       string;
  Name_fr:                                       string;
  Name_ja:                                       string;
  NewPlayerBonusA:                               number;
  NewPlayerBonusB:                               number;
  Order:                                         number;
  PartyCondition:                                string;
  Patch:                                         number;
  ReqInstance:                                   null;
  ReqInstanceTarget:                             string;
  ReqInstanceTargetID:                           number;
  SortKey:                                       number;
  TimeLimitMin:                                  number;
  Url:                                           string;
  WeekRestriction:                               number;
  WinBGM:                                        WinBGM;
  WinBGMTarget:                                  string;
  WinBGMTargetID:                                number;
}

export interface BNpcBaseBoss {
  ArrayEventHandler:         null;
  ArrayEventHandlerTarget:   string;
  ArrayEventHandlerTargetID: number;
  BNpcCustomize:             BNpcCustomize;
  BNpcCustomizeTarget:       string;
  BNpcCustomizeTargetID:     number;
  BNpcName:                  BNpcName;
  BNpcParts:                 null;
  BNpcPartsTarget:           string;
  BNpcPartsTargetID:         number;
  Battalion:                 null;
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
  ModelChara:                null;
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

export interface BNpcCustomize {
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

export interface Race {
  ExPac:         number;
  ID:            number;
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
  RSEFBody:      number;
  RSEFFeet:      number;
  RSEFHands:     number;
  RSEFLegs:      number;
  RSEMBody:      number;
  RSEMFeet:      number;
  RSEMHands:     number;
  RSEMLegs:      number;
}

export interface Tribe {
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

export interface BNpcName {
  Adjective:         number;
  Article:           number;
  GameContentLinks:  null;
  ID:                number;
  Icon:              string;
  Name:              string;
  Name_de:           string;
  Name_en:           string;
  Name_fr:           string;
  Name_ja:           string;
  Plural:            string;
  Plural_de:         string;
  Plural_en:         string;
  Plural_fr:         string;
  Plural_ja:         string;
  PossessivePronoun: number;
  Pronoun:           number;
  StartsWithVowel:   number;
  Url:               string;
}

export interface NpcEquip {
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

export interface ContentFinderCondition {
  AcceptClassJobCategory:         AcceptClassJobCategory;
  AcceptClassJobCategoryTarget:   string;
  AcceptClassJobCategoryTargetID: number;
  "AddedIn5-3":                   number;
  AllianceRoulette:               number;
  AllowReplacement:               number;
  AllowUndersized:                number;
  ClassJobLevelRequired:          number;
  ClassJobLevelSync:              number;
  Content:                        number;
  ContentLinkType:                number;
  ContentMemberType:              ContentMemberType;
  ContentMemberTypeTarget:        string;
  ContentMemberTypeTargetID:      number;
  ContentType:                    ContentType;
  ContentTypeTarget:              string;
  ContentTypeTargetID:            number;
  DailyFrontlineChallenge:        number;
  Description:                    string;
  Description_de:                 string;
  Description_en:                 string;
  Description_fr:                 string;
  Description_ja:                 string;
  DutyRecorderAllowed:            number;
  ExpertRoulette:                 number;
  GameContentLinks:               null;
  GuildHestRoulette:              number;
  HighEndDuty:                    number;
  ID:                             number;
  Icon:                           string;
  IconID:                         number;
  Image:                          string;
  ImageID:                        number;
  ItemLevelRequired:              number;
  ItemLevelSync:                  number;
  "Level50/60Roulette":           number;
  Level70Roulette:                number;
  LevelingRoulette:               number;
  MSQRoulette:                    number;
  MentorRoulette:                 number;
  Name:                           string;
  Name_de:                        string;
  Name_en:                        string;
  Name_fr:                        string;
  Name_ja:                        string;
  NormalRaidRoulette:             number;
  PvP:                            number;
  ShortCode:                      string;
  ShortCode_de:                   string;
  ShortCode_en:                   string;
  ShortCode_fr:                   string;
  ShortCode_ja:                   string;
  SortKey:                        number;
  TerritoryType:                  ContentFinderConditionTerritoryType;
  TerritoryTypeTarget:            string;
  TerritoryTypeTargetID:          number;
  Transient:                      number;
  TransientDescription:           string;
  TransientDescription_de:        string;
  TransientDescription_en:        string;
  TransientDescription_fr:        string;
  TransientDescription_ja:        string;
  TransientKey:                   number;
  TrialRoulette:                  number;
  UnlockQuest:                    null;
  UnlockQuestTarget:              string;
  UnlockQuestTargetID:            number;
  Url:                            string;
}

export interface AcceptClassJobCategory {
  ACN:     number;
  ADV:     number;
  ALC:     number;
  ARC:     number;
  ARM:     number;
  AST:     number;
  BLM:     number;
  BLU:     number;
  BRD:     number;
  BSM:     number;
  BTN:     number;
  CNJ:     number;
  CRP:     number;
  CUL:     number;
  DNC:     number;
  DRG:     number;
  DRK:     number;
  FSH:     number;
  GLA:     number;
  GNB:     number;
  GSM:     number;
  ID:      number;
  LNC:     number;
  LTW:     number;
  MCH:     number;
  MIN:     number;
  MNK:     number;
  MRD:     number;
  NIN:     number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
  PGL:     number;
  PLD:     number;
  RDM:     number;
  ROG:     number;
  SAM:     number;
  SCH:     number;
  SMN:     number;
  THM:     number;
  WAR:     number;
  WHM:     number;
  WVR:     number;
}

export interface ContentMemberType {
  HealersPerParty: number;
  ID:              number;
  MeleesPerParty:  number;
  RangedPerParty:  number;
  TanksPerParty:   number;
}

export interface ContentType {
  ID:               number;
  Icon:             string;
  IconDutyFinder:   string;
  IconDutyFinderID: number;
  IconID:           number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
}

export interface ContentFinderConditionTerritoryType {
  AchievementIndex:          string;
  "AddedIn5-3":              number;
  Aetheryte:                 null;
  AetheryteTarget:           string;
  AetheryteTargetID:         number;
  ArrayEventHandler:         null;
  ArrayEventHandlerTarget:   string;
  ArrayEventHandlerTargetID: number;
  BGM:                       null;
  BGMTarget:                 string;
  BGMTargetID:               number;
  BattalionMode:             number;
  Bg:                        string;
  Bg_en:                     string;
  ExVersion:                 null;
  ExVersionTarget:           string;
  ExVersionTargetID:         number;
  ExclusiveType:             number;
  FixedTime:                 string;
  ID:                        number;
  IsPvpZone:                 number;
  LoadingImage:              InstanceContentType;
  LoadingImageTarget:        string;
  LoadingImageTargetID:      number;
  Map:                       Map;
  MapTarget:                 string;
  MapTargetID:               number;
  Mount:                     number;
  MountSpeed:                null;
  MountSpeedTarget:          string;
  MountSpeedTargetID:        number;
  Name:                      string;
  Name_en:                   string;
  PCSearch:                  number;
  PlaceName:                 PlaceName;
  PlaceNameIcon:             string;
  PlaceNameIconID:           number;
  PlaceNameRegion:           PlaceName;
  PlaceNameRegionIcon:       string;
  PlaceNameRegionIconID:     number;
  PlaceNameRegionTarget:     string;
  PlaceNameRegionTargetID:   number;
  PlaceNameTarget:           string;
  PlaceNameTargetID:         number;
  PlaceNameZone:             PlaceName;
  PlaceNameZoneTarget:       string;
  PlaceNameZoneTargetID:     number;
  QuestBattle:               null;
  QuestBattleTarget:         string;
  QuestBattleTargetID:       number;
  Resident:                  number;
  Stealth:                   number;
  TerritoryIntendedUse:      number;
  WeatherRate:               number;
}

export interface InstanceContentType {
  ID: number;
}

export interface Map {
  DiscoveryArrayByte:      number;
  DiscoveryFlag:           number;
  DiscoveryIndex:          number;
  Hierarchy:               number;
  ID:                      number;
  IsEvent:                 number;
  MapCondition:            null;
  MapConditionTarget:      string;
  MapConditionTargetID:    number;
  MapFilename:             string;
  MapFilenameId:           string;
  MapIndex:                number;
  MapMarkerRange:          number;
  OffsetX:                 number;
  OffsetY:                 number;
  PlaceName:               PlaceName;
  PlaceNameRegion:         PlaceName;
  PlaceNameRegionTarget:   string;
  PlaceNameRegionTargetID: number;
  PlaceNameSub:            null;
  PlaceNameSubTarget:      string;
  PlaceNameSubTargetID:    number;
  PlaceNameTarget:         string;
  PlaceNameTargetID:       number;
  PriorityCategoryUI:      number;
  PriorityUI:              number;
  SizeFactor:              number;
  TerritoryType:           MapTerritoryType;
  TerritoryTypeTarget:     string;
  TerritoryTypeTargetID:   number;
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

export interface MapTerritoryType {
  AchievementIndex:      string;
  "AddedIn5-3":          number;
  Aetheryte:             number;
  ArrayEventHandler:     number;
  BGM:                   number;
  BattalionMode:         number;
  Bg:                    string;
  Bg_en:                 string;
  ExVersion:             number;
  ExclusiveType:         number;
  FixedTime:             string;
  ID:                    number;
  IsPvpZone:             number;
  LoadingImage:          number;
  Map:                   number;
  Mount:                 number;
  MountSpeed:            number;
  Name:                  string;
  Name_en:               string;
  PCSearch:              number;
  PlaceName:             number;
  PlaceNameIcon:         string;
  PlaceNameIconID:       number;
  PlaceNameRegion:       number;
  PlaceNameRegionIcon:   string;
  PlaceNameRegionIconID: number;
  PlaceNameZone:         number;
  QuestBattle:           number;
  Resident:              number;
  Stealth:               number;
  TerritoryIntendedUse:  number;
  WeatherRate:           number;
}

export interface Cutscene {
  ID:      number;
  Path:    string;
  Path_en: string;
}

export interface GameContentLinks {
  InstanceContent:        InstanceContent;
  InstanceContentCSBonus: InstanceContentCSBonusClass;
  InstanceContentGuide:   InstanceContentCSBonusClass;
}

export interface InstanceContent {
  ReqInstance: number[];
}

export interface InstanceContentCSBonusClass {
  Instance: number[];
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

export interface InstanceContentTextDataObjective {
  ID:      number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}

export interface WinBGM {
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
