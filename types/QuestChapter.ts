export interface QuestChapterIndex {
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


export interface QuestChapter {
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Quest:            { [key: string]: number | { [key: string]: QuestClass | number | null | string } | null | string };
  QuestTarget:      string;
  QuestTargetID:    number;
  Redo:             Redo;
  RedoTarget:       string;
  RedoTargetID:     number;
  Url:              string;
}

export interface QuestClass {
  "1HWpn%"?:                   number;
  "2HWpn%"?:                   number;
  "Bracelet%"?:                number;
  "Chest%"?:                   number;
  "ChestHead%"?:               number;
  "ChestHeadLegsFeet%"?:       number;
  "ChestLegsFeet%"?:           number;
  "ChestLegsGloves%"?:         number;
  Description?:                string;
  Description_de?:             string;
  Description_en?:             string;
  Description_fr?:             string;
  Description_ja?:             string;
  "Earring%"?:                 number;
  "Feet%"?:                    number;
  "Hands%"?:                   number;
  "Head%"?:                    number;
  "HeadChestHandsLegsFeet%"?:  number;
  ID:                          number;
  "Legs%"?:                    number;
  "LegsFeet%"?:                number;
  MeldParam0?:                 number;
  MeldParam1?:                 number;
  MeldParam10?:                number;
  MeldParam11?:                number;
  MeldParam12?:                number;
  MeldParam2?:                 number;
  MeldParam3?:                 number;
  MeldParam4?:                 number;
  MeldParam5?:                 number;
  MeldParam6?:                 number;
  MeldParam7?:                 number;
  MeldParam8?:                 number;
  MeldParam9?:                 number;
  Name?:                       string;
  Name_de?:                    string;
  Name_en?:                    string;
  Name_fr?:                    string;
  Name_ja?:                    string;
  "Necklace%"?:                number;
  "OH%"?:                      number;
  OrderPriority?:              number;
  PacketIndex?:                number;
  "Ring%"?:                    number;
  "UnderArmor%"?:              number;
  "Waist%"?:                   number;
  ACN?:                        number;
  ADV?:                        number;
  ALC?:                        number;
  ARC?:                        number;
  ARM?:                        number;
  AST?:                        number;
  BLM?:                        number;
  BLU?:                        number;
  BRD?:                        number;
  BSM?:                        number;
  BTN?:                        number;
  CNJ?:                        number;
  CRP?:                        number;
  CUL?:                        number;
  DNC?:                        number;
  DRG?:                        number;
  DRK?:                        number;
  FSH?:                        number;
  GLA?:                        number;
  GNB?:                        number;
  GSM?:                        number;
  LNC?:                        number;
  LTW?:                        number;
  MCH?:                        number;
  MIN?:                        number;
  MNK?:                        number;
  MRD?:                        number;
  NIN?:                        number;
  PGL?:                        number;
  PLD?:                        number;
  RDM?:                        number;
  ROG?:                        number;
  SAM?:                        number;
  SCH?:                        number;
  SMN?:                        number;
  THM?:                        number;
  WAR?:                        number;
  WHM?:                        number;
  WVR?:                        number;
  Abbreviation?:               string;
  Abbreviation_de?:            string;
  Abbreviation_en?:            string;
  Abbreviation_fr?:            string;
  Abbreviation_ja?:            string;
  BattleClassIndex?:           string;
  CanQueueForDuty?:            number;
  ClassJobCategory?:           number;
  ClassJobParent?:             number;
  ExpArrayIndex?:              number;
  Icon?:                       string;
  IsLimitedJob?:               number;
  ItemSoulCrystal?:            number;
  ItemStartingWeapon?:         number;
  JobIndex?:                   number;
  LimitBreak1?:                number;
  LimitBreak2?:                number;
  LimitBreak3?:                number;
  ModifierDexterity?:          number;
  ModifierHitPoints?:          number;
  ModifierIntelligence?:       number;
  ModifierManaPoints?:         number;
  ModifierMind?:               number;
  ModifierPiety?:              number;
  ModifierStrength?:           number;
  ModifierVitality?:           number;
  MonsterNote?:                number;
  NameEnglish?:                string;
  NameEnglish_de?:             string;
  NameEnglish_en?:             string;
  NameEnglish_fr?:             string;
  NameEnglish_ja?:             string;
  PartyBonus?:                 number;
  Prerequisite?:               number;
  PrimaryStat?:                number;
  RelicQuest?:                 number;
  Role?:                       number;
  StartingLevel?:              number;
  StartingTown?:               number;
  UIPriority?:                 number;
  UnlockQuest?:                number;
  Body?:                       number;
  Ears?:                       number;
  Feet?:                       number;
  FingerL?:                    number;
  FingerR?:                    number;
  Gloves?:                     number;
  Head?:                       number;
  Legs?:                       number;
  MainHand?:                   number;
  Neck?:                       number;
  OffHand?:                    number;
  SoulCrystal?:                number;
  Waist?:                      number;
  Wrists?:                     number;
  AdditionalData?:             number;
  Adjective?:                  number;
  AetherialReduce?:            number;
  AlwaysCollectable?:          number;
  Article?:                    number;
  BaseParam0?:                 number;
  BaseParam1?:                 number;
  BaseParam2?:                 number;
  BaseParam3?:                 number;
  BaseParam4?:                 number;
  BaseParam5?:                 number;
  BaseParamModifier?:          number;
  BaseParamSpecial0?:          number;
  BaseParamSpecial1?:          number;
  BaseParamSpecial2?:          number;
  BaseParamSpecial3?:          number;
  BaseParamSpecial4?:          number;
  BaseParamSpecial5?:          number;
  BaseParamValue0?:            number;
  BaseParamValue1?:            number;
  BaseParamValue2?:            number;
  BaseParamValue3?:            number;
  BaseParamValue4?:            number;
  BaseParamValue5?:            number;
  BaseParamValueSpecial0?:     number;
  BaseParamValueSpecial1?:     number;
  BaseParamValueSpecial2?:     number;
  BaseParamValueSpecial3?:     number;
  BaseParamValueSpecial4?:     number;
  BaseParamValueSpecial5?:     number;
  Block?:                      number;
  BlockRate?:                  number;
  CanBeHq?:                    number;
  ClassJobRepair?:             number;
  ClassJobUse?:                number;
  CooldownS?:                  number;
  DamageMag?:                  number;
  DamagePhys?:                 number;
  DefenseMag?:                 number;
  DefensePhys?:                number;
  DelayMs?:                    number;
  Desynth?:                    number;
  EquipRestriction?:           number;
  EquipSlotCategory?:          number;
  FilterGroup?:                number;
  GrandCompany?:               number;
  IconID?:                     number;
  IsAdvancedMeldingPermitted?: number;
  IsCollectable?:              number;
  IsCrestWorthy?:              number;
  IsDyeable?:                  number;
  IsGlamourous?:               number;
  IsIndisposable?:             number;
  IsPvP?:                      number;
  IsUnique?:                   number;
  IsUntradable?:               number;
  ItemAction?:                 number;
  ItemGlamour?:                number;
  ItemRepair?:                 number;
  ItemSearchCategory?:         number;
  ItemSeries?:                 number;
  ItemSortCatgegory?:          number;
  ItemSpecialBonus?:           number;
  ItemSpecialBonusParam?:      number;
  ItemUICategory?:             number;
  LevelEquip?:                 number;
  LevelItem?:                  number;
  Lot?:                        number;
  MateriaSlotCount?:           number;
  MaterializeType?:            number;
  ModelMain?:                  string;
  ModelSub?:                   string;
  Plural?:                     string;
  Plural_de?:                  string;
  Plural_en?:                  string;
  Plural_fr?:                  string;
  Plural_ja?:                  string;
  PossessivePronoun?:          number;
  PriceLow?:                   number;
  PriceMid?:                   number;
  Pronoun?:                    number;
  Rarity?:                     number;
  Singular?:                   string;
  Singular_de?:                string;
  Singular_en?:                string;
  Singular_fr?:                string;
  Singular_ja?:                string;
  StackSize?:                  number;
  StartsWithVowel?:            number;
  Category?:                   number;
  ClassJob?:                   number;
  Order?:                      number;
  OrderMajor?:                 number;
  OrderMinor?:                 number;
  DataType?:                   number;
  JournalSection?:             number;
  SeparateType?:               number;
  DiscoveryArrayByte?:         number;
  DiscoveryFlag?:              number;
  DiscoveryIndex?:             number;
  Hierarchy?:                  number;
  IsEvent?:                    number;
  MapCondition?:               number;
  MapFilename?:                string;
  MapFilenameId?:              string;
  MapIndex?:                   number;
  MapMarkerRange?:             number;
  OffsetX?:                    number;
  OffsetY?:                    number;
  PlaceName?:                  number;
  PlaceNameRegion?:            number;
  PlaceNameSub?:               number;
  PriorityCategoryUI?:         number;
  PriorityUI?:                 number;
  SizeFactor?:                 number;
  TerritoryType?:              number;
  AchievementIndex?:           number;
  "AddedIn5-3"?:               number;
  Aetheryte?:                  number;
  ArrayEventHandler?:          number;
  BGM?:                        number;
  BattalionMode?:              number;
  Bg?:                         string;
  Bg_en?:                      string;
  ExVersion?:                  number;
  ExclusiveType?:              number;
  FixedTime?:                  string;
  IsPvpZone?:                  number;
  LoadingImage?:               number;
  Map?:                        number;
  Mount?:                      number;
  MountSpeed?:                 number;
  PCSearch?:                   number;
  PlaceNameIcon?:              string;
  PlaceNameIconID?:            number;
  PlaceNameRegionIcon?:        string;
  PlaceNameRegionIconID?:      number;
  PlaceNameZone?:              number;
  QuestBattle?:                number;
  Resident?:                   number;
  Stealth?:                    number;
  TerritoryIntendedUse?:       number;
  WeatherRate?:                number;
}

export interface Redo {
  ID: number;
}
