export interface IKDSpotIndex {
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


export interface IKDSpot {
  GameContentLinks:  GameContentLinks;
  ID:                number;
  Patch:             null;
  PlaceName:         PlaceName;
  PlaceNameTarget:   string;
  PlaceNameTargetID: number;
  SpotMain:          Spot;
  SpotMainTarget:    string;
  SpotMainTargetID:  number;
  SpotSub:           Spot;
  SpotSubTarget:     string;
  SpotSubTargetID:   number;
  Url:               string;
}

export interface GameContentLinks {
  IKDRoute: IKDRoute;
}

export interface IKDRoute {
  Spot0: number[];
  Spot1: number[];
  Spot2: number[];
  Spot3: number[];
}

export interface PlaceName {
  ID:               number;
  Icon:             PlaceNameIcon;
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

export enum PlaceNameIcon {
  CPlaceNamePNG = "/c/PlaceName.png",
}

export interface Spot {
  BigFishOnEnd:          string;
  BigFishOnEnd_de:       string;
  BigFishOnEnd_en:       string;
  BigFishOnEnd_fr:       string;
  BigFishOnEnd_ja:       string;
  BigFishOnReach:        string;
  BigFishOnReach_de:     string;
  BigFishOnReach_en:     string;
  BigFishOnReach_fr:     string;
  BigFishOnReach_ja:     string;
  FishingSpotCategory:   number;
  GatheringLevel:        number;
  ID:                    number;
  Item0:                 Item;
  Item0Target:           ItemTarget;
  Item0TargetID:         number;
  Item1:                 Item;
  Item1Target:           ItemTarget;
  Item1TargetID:         number;
  Item2:                 Item;
  Item2Target:           ItemTarget;
  Item2TargetID:         number;
  Item3:                 Item;
  Item3Target:           ItemTarget;
  Item3TargetID:         number;
  Item4:                 Item;
  Item4Target:           ItemTarget;
  Item4TargetID:         number;
  Item5:                 Item;
  Item5Target:           ItemTarget;
  Item5TargetID:         number;
  Item6:                 Item;
  Item6Target:           ItemTarget;
  Item6TargetID:         number;
  Item7:                 Item;
  Item7Target:           ItemTarget;
  Item7TargetID:         number;
  Item8:                 Item;
  Item8Target:           ItemTarget;
  Item8TargetID:         number;
  Item9:                 Item;
  Item9Target:           ItemTarget;
  Item9TargetID:         number;
  Order:                 number;
  PlaceName:             PlaceName;
  PlaceNameMain:         PlaceName;
  PlaceNameMainTarget:   string;
  PlaceNameMainTargetID: number;
  PlaceNameSub:          PlaceName;
  PlaceNameSubTarget:    string;
  PlaceNameSubTargetID:  number;
  PlaceNameTarget:       string;
  PlaceNameTargetID:     number;
  Radius:                number;
  Rare:                  number;
  TerritoryType:         TerritoryType;
  TerritoryTypeTarget:   string;
  TerritoryTypeTargetID: number;
  X:                     number;
  Z:                     number;
}

export interface Item {
  AdditionalData:             number;
  Adjective:                  number;
  AetherialReduce:            number;
  AlwaysCollectable:          number;
  Article:                    number;
  BaseParam0:                 null;
  BaseParam0Target:           BaseParamTarget;
  BaseParam0TargetID:         number;
  BaseParam1:                 null;
  BaseParam1Target:           BaseParamTarget;
  BaseParam1TargetID:         number;
  BaseParam2:                 null;
  BaseParam2Target:           BaseParamTarget;
  BaseParam2TargetID:         number;
  BaseParam3:                 null;
  BaseParam3Target:           BaseParamTarget;
  BaseParam3TargetID:         number;
  BaseParam4:                 null;
  BaseParam4Target:           BaseParamTarget;
  BaseParam4TargetID:         number;
  BaseParam5:                 null;
  BaseParam5Target:           BaseParamTarget;
  BaseParam5TargetID:         number;
  BaseParamModifier:          number;
  BaseParamSpecial0:          null;
  BaseParamSpecial0Target:    BaseParamTarget;
  BaseParamSpecial0TargetID:  number;
  BaseParamSpecial1:          null;
  BaseParamSpecial1Target:    BaseParamTarget;
  BaseParamSpecial1TargetID:  number;
  BaseParamSpecial2:          null;
  BaseParamSpecial2Target:    BaseParamTarget;
  BaseParamSpecial2TargetID:  number;
  BaseParamSpecial3:          null;
  BaseParamSpecial3Target:    BaseParamTarget;
  BaseParamSpecial3TargetID:  number;
  BaseParamSpecial4:          null;
  BaseParamSpecial4Target:    BaseParamTarget;
  BaseParamSpecial4TargetID:  number;
  BaseParamSpecial5:          null;
  BaseParamSpecial5Target:    BaseParamTarget;
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
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobRepair:             ClassJobRepair;
  ClassJobRepairTarget:       ClassJobTarget;
  ClassJobRepairTargetID:     number;
  ClassJobUse:                null;
  ClassJobUseTarget:          ClassJobTarget;
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
  EquipSlotCategoryTarget:    EquipSlotCategoryTarget;
  EquipSlotCategoryTargetID:  number;
  FilterGroup:                number;
  GrandCompany:               null;
  GrandCompanyTarget:         GrandCompanyTarget;
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
  ItemActionTarget:           ItemActionTarget;
  ItemActionTargetID:         number;
  ItemGlamour:                null;
  ItemGlamourTarget:          ItemTarget;
  ItemGlamourTargetID:        number;
  ItemRepair:                 null;
  ItemRepairTarget:           ItemTarget;
  ItemRepairTargetID:         number;
  ItemSearchCategory:         ItemSearchCategory | null;
  ItemSearchCategoryTarget:   ItemSearchCategoryTarget;
  ItemSearchCategoryTargetID: number;
  ItemSeries:                 null;
  ItemSeriesTarget:           ItemSeriesTarget;
  ItemSeriesTargetID:         number;
  ItemSortCategory:           null;
  ItemSortCategoryTarget:     ItemSortCategoryTarget;
  ItemSortCategoryTargetID:   null;
  ItemSortCatgegory:          number;
  ItemSpecialBonus:           null;
  ItemSpecialBonusParam:      number;
  ItemSpecialBonusTarget:     ItemSpecialBonusTarget;
  ItemSpecialBonusTargetID:   number;
  ItemUICategory:             ItemUICategory;
  ItemUICategoryTarget:       ItemUICategoryTarget;
  ItemUICategoryTargetID:     number;
  LevelEquip:                 number;
  LevelItem:                  number;
  Lot:                        number;
  MateriaSlotCount:           number;
  MaterializeType:            number;
  ModelMain:                  Model;
  ModelSub:                   Model;
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

export enum BaseParamTarget {
  BaseParam = "BaseParam",
}

export enum ClassJobCategoryTarget {
  ClassJobCategory = "ClassJobCategory",
}

export interface ClassJobRepair {
  Abbreviation:         Abbreviation;
  Abbreviation_de:      AbbreviationDe;
  Abbreviation_en:      Abbreviation;
  Abbreviation_fr:      AbbreviationFr;
  Abbreviation_ja:      Abbreviation;
  BattleClassIndex:     string;
  CanQueueForDuty:      number;
  ClassJobCategory:     number;
  ClassJobParent:       number;
  ExpArrayIndex:        number;
  ID:                   number;
  Icon:                 ClassJobRepairIcon;
  IsLimitedJob:         number;
  ItemSoulCrystal:      number;
  ItemStartingWeapon:   number;
  JobIndex:             number;
  LimitBreak1:          number;
  LimitBreak2:          number;
  LimitBreak3:          number;
  ModifierDexterity:    number;
  ModifierHitPoints:    number;
  ModifierIntelligence: number;
  ModifierManaPoints:   number;
  ModifierMind:         number;
  ModifierPiety:        number;
  ModifierStrength:     number;
  ModifierVitality:     number;
  MonsterNote:          number;
  Name:                 ClassJobRepairName;
  NameEnglish:          NameEnglish;
  NameEnglish_de:       NameEnglish;
  NameEnglish_en:       NameEnglish;
  NameEnglish_fr:       NameEnglish;
  NameEnglish_ja:       NameEnglish;
  Name_de:              ClassJobRepairNameDe;
  Name_en:              ClassJobRepairName;
  Name_fr:              ClassJobRepairNameFr;
  Name_ja:              ClassJobRepairNameJa;
  PartyBonus:           number;
  Prerequisite:         number;
  PrimaryStat:          number;
  RelicQuest:           number;
  Role:                 number;
  StartingLevel:        number;
  StartingTown:         number;
  UIPriority:           number;
  UnlockQuest:          number;
}

export enum Abbreviation {
  Cul = "CUL",
}

export enum AbbreviationDe {
  Grm = "GRM",
}

export enum AbbreviationFr {
  Cui = "CUI",
}

export enum ClassJobRepairIcon {
  Cj1CulinarianPNG = "/cj/1/culinarian.png",
}

export enum ClassJobRepairName {
  Culinarian = "culinarian",
}

export enum NameEnglish {
  Culinarian = "Culinarian",
}

export enum ClassJobRepairNameDe {
  Gourmet = "Gourmet",
}

export enum ClassJobRepairNameFr {
  Cuisinier = "cuisinier",
}

export enum ClassJobRepairNameJa {
  調理師 = "調理師",
}

export enum ClassJobTarget {
  ClassJob = "ClassJob",
}

export enum EquipSlotCategoryTarget {
  EquipSlotCategory = "EquipSlotCategory",
}

export enum GrandCompanyTarget {
  GrandCompany = "GrandCompany",
}

export enum ItemActionTarget {
  ItemAction = "ItemAction",
}

export enum ItemTarget {
  Item = "Item",
}

export interface ItemSearchCategory {
  Category: number;
  ClassJob: number;
  ID:       number;
  Icon:     ItemSearchCategoryIcon;
  IconID:   number;
  Name:     ItemSearchCategoryName;
  Name_de:  ItemSearchCategoryNameDe;
  Name_en:  ItemSearchCategoryName;
  Name_fr:  ItemSearchCategoryNameFr;
  Name_ja:  ItemSearchCategoryNameJa;
  Order:    number;
}

export enum ItemSearchCategoryIcon {
  I060000060138PNG = "/i/060000/060138.png",
}

export enum ItemSearchCategoryName {
  Seafood = "Seafood",
}

export enum ItemSearchCategoryNameDe {
  Meeresfrüchte = "Meeresfrüchte",
}

export enum ItemSearchCategoryNameFr {
  ProduitDeLaPêche = "Produit de la pêche",
}

export enum ItemSearchCategoryNameJa {
  水産物 = "水産物",
}

export enum ItemSearchCategoryTarget {
  ItemSearchCategory = "ItemSearchCategory",
}

export enum ItemSeriesTarget {
  ItemSeries = "ItemSeries",
}

export enum ItemSortCategoryTarget {
  ItemSortCategory = "ItemSortCategory",
}

export enum ItemSpecialBonusTarget {
  ItemSpecialBonus = "ItemSpecialBonus",
}

export interface ItemUICategory {
  ID:         number;
  Icon:       ItemSearchCategoryIcon;
  IconID:     number;
  Name:       ItemSearchCategoryName;
  Name_de:    ItemSearchCategoryNameDe;
  Name_en:    ItemSearchCategoryName;
  Name_fr:    ItemSearchCategoryNameFr;
  Name_ja:    ItemSearchCategoryNameJa;
  OrderMajor: number;
  OrderMinor: number;
}

export enum ItemUICategoryTarget {
  ItemUICategory = "ItemUICategory",
}

export enum Model {
  The0000 = "0, 0, 0, 0",
}

export interface TerritoryType {
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
  LoadingImage:              LoadingImage;
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
  PlaceNameZone:             null;
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

export interface LoadingImage {
  ID: number;
}

export interface Map {
  DiscoveryArrayByte: number;
  DiscoveryFlag:      number;
  DiscoveryIndex:     string;
  Hierarchy:          number;
  ID:                 number;
  IsEvent:            number;
  MapCondition:       number;
  MapFilename:        string;
  MapFilenameId:      string;
  MapIndex:           number;
  MapMarkerRange:     number;
  OffsetX:            number;
  OffsetY:            number;
  PlaceName:          number;
  PlaceNameRegion:    number;
  PlaceNameSub:       number;
  PriorityCategoryUI: number;
  PriorityUI:         number;
  SizeFactor:         number;
  TerritoryType:      number;
}
