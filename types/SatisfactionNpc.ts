
export namespace SatisfactionNpcIndexNS {
  export type SatisfactionNpcIndex = {
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
    Name: null;
    Url:  string;
  }
  
}

export type Index = SatisfactionNpcIndexNS.SatisfactionNpcIndex;

export namespace SatisfactionNpcNS {
  export type SatisfactionNpc = {
    "AddedIn5-30":         number;
    "AddedIn5-31":         number;
    DeliveriesPerWeek:     number;
    GameContentLinks:      any[];
    ID:                    number;
    Icon:                  string;
    IconID:                number;
    IsHQ00:                number;
    IsHQ01:                number;
    IsHQ02:                number;
    IsHQ10:                number;
    IsHQ11:                number;
    IsHQ12:                number;
    IsHQ20:                number;
    IsHQ21:                number;
    IsHQ22:                number;
    IsHQ30:                number;
    IsHQ31:                number;
    IsHQ32:                number;
    IsHQ40:                number;
    IsHQ41:                number;
    IsHQ42:                number;
    IsHQ50:                number;
    IsHQ51:                number;
    IsHQ52:                number;
    Item00:                null;
    Item00Target:          ItemTarget;
    Item00TargetID:        null;
    Item01:                null;
    Item01Target:          ItemTarget;
    Item01TargetID:        null;
    Item02:                null;
    Item02Target:          ItemTarget;
    Item02TargetID:        null;
    Item10:                Item;
    Item10Target:          ItemTarget;
    Item10TargetID:        number;
    Item11:                Item;
    Item11Target:          ItemTarget;
    Item11TargetID:        number;
    Item12:                Item;
    Item12Target:          ItemTarget;
    Item12TargetID:        number;
    Item20:                Item;
    Item20Target:          ItemTarget;
    Item20TargetID:        number;
    Item21:                Item;
    Item21Target:          ItemTarget;
    Item21TargetID:        number;
    Item22:                Item;
    Item22Target:          ItemTarget;
    Item22TargetID:        number;
    Item30:                Item;
    Item30Target:          ItemTarget;
    Item30TargetID:        number;
    Item31:                Item;
    Item31Target:          ItemTarget;
    Item31TargetID:        number;
    Item32:                Item;
    Item32Target:          ItemTarget;
    Item32TargetID:        number;
    Item40:                Item;
    Item40Target:          ItemTarget;
    Item40TargetID:        number;
    Item41:                Item;
    Item41Target:          ItemTarget;
    Item41TargetID:        number;
    Item42:                Item;
    Item42Target:          ItemTarget;
    Item42TargetID:        number;
    Item50:                null;
    Item50Target:          ItemTarget;
    Item50TargetID:        null;
    Item51:                null;
    Item51Target:          ItemTarget;
    Item51TargetID:        null;
    Item52:                null;
    Item52Target:          ItemTarget;
    Item52TargetID:        null;
    ItemCount00:           number;
    ItemCount01:           number;
    ItemCount02:           number;
    ItemCount10:           number;
    ItemCount11:           number;
    ItemCount12:           number;
    ItemCount20:           number;
    ItemCount21:           number;
    ItemCount22:           number;
    ItemCount30:           number;
    ItemCount31:           number;
    ItemCount32:           number;
    ItemCount40:           number;
    ItemCount41:           number;
    ItemCount42:           number;
    ItemCount50:           number;
    ItemCount51:           number;
    ItemCount52:           number;
    LevelUnlock:           number;
    Npc:                   Npc;
    NpcTarget:             string;
    NpcTargetID:           number;
    Patch:                 null;
    QuestRequired:         { [key: string]: number | { [key: string]: QuestRequiredClass | number | string } | null | string };
    QuestRequiredTarget:   string;
    QuestRequiredTargetID: number;
    SatisfactionRequired0: number;
    SatisfactionRequired1: number;
    SatisfactionRequired2: number;
    SatisfactionRequired3: number;
    SatisfactionRequired4: number;
    SatisfactionRequired5: number;
    SupplyIndex0:          number;
    SupplyIndex1:          number;
    SupplyIndex2:          number;
    SupplyIndex3:          number;
    SupplyIndex4:          number;
    SupplyIndex5:          number;
    Url:                   string;
  }
  
  export enum ItemTarget {
    Item = "Item",
  }
  
  export type Item = {
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
    ClassJobRepair:             null;
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
    ItemAction:                 { [key: string]: number } | null;
    ItemActionTarget:           ItemActionTarget;
    ItemActionTargetID:         number;
    ItemGlamour:                null;
    ItemGlamourTarget:          ItemTarget;
    ItemGlamourTargetID:        number;
    ItemRepair:                 null;
    ItemRepairTarget:           ItemTarget;
    ItemRepairTargetID:         number;
    ItemSearchCategory:         ItemSearchCategory;
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
    ModelMain:                  string;
    ModelSub:                   ModelSub;
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
  
  export type ItemSearchCategory = {
    Category: number;
    ClassJob: number;
    ID:       number;
    Icon:     Icon;
    IconID:   number;
    Name:     ItemSearchCategoryName;
    Name_de:  NameDe;
    Name_en:  ItemSearchCategoryName;
    Name_fr:  NameFr;
    Name_ja:  NameJa;
    Order:    number;
  }
  
  export enum Icon {
    I060000060146PNG = "/i/060000/060146.png",
    I060000060150PNG = "/i/060000/060150.png",
  }
  
  export enum ItemSearchCategoryName {
    Materia = "Materia",
    Meals = "Meals",
  }
  
  export enum NameDe {
    Gericht = "Gericht",
    Materia = "Materia",
  }
  
  export enum NameFr {
    Matéria = "Matéria",
    PlatOuBoisson = "Plat ou boisson",
  }
  
  export enum NameJa {
    マテリア = "マテリア",
    調理品 = "調理品",
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
  
  export type ItemUICategory = {
    ID:         number;
    Icon:       Icon;
    IconID:     number;
    Name:       ItemUICategoryName;
    Name_de:    NameDe;
    Name_en:    ItemUICategoryName;
    Name_fr:    NameFr;
    Name_ja:    NameJa;
    OrderMajor: number;
    OrderMinor: number;
  }
  
  export enum ItemUICategoryName {
    Materia = "Materia",
    Meal = "Meal",
  }
  
  export enum ItemUICategoryTarget {
    ItemUICategory = "ItemUICategory",
  }
  
  export enum ModelSub {
    The0000 = "0, 0, 0, 0",
  }
  
  export type Npc = {
    Adjective:         number;
    Article:           number;
    ID:                number;
    Icon:              string;
    Map:               number;
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
    Title:             string;
    Title_de:          string;
    Title_en:          string;
    Title_fr:          string;
    Title_ja:          string;
  }
  
  export type QuestRequiredClass = {
    ID:                     number;
    Image?:                 string;
    ImageID?:               number;
    Jingle?:                number;
    Lang?:                  number;
    Type?:                  number;
    DataType?:              number;
    JournalSection?:        number;
    Name?:                  string;
    Name_de?:               string;
    Name_en?:               string;
    Name_fr?:               string;
    Name_ja?:               string;
    SeparateType?:          number;
    DiscoveryArrayByte?:    number;
    DiscoveryFlag?:         number;
    DiscoveryIndex?:        string;
    Hierarchy?:             number;
    IsEvent?:               number;
    MapCondition?:          number;
    MapFilename?:           string;
    MapFilenameId?:         string;
    MapIndex?:              number;
    MapMarkerRange?:        number;
    OffsetX?:               number;
    OffsetY?:               number;
    PlaceName?:             number;
    PlaceNameRegion?:       number;
    PlaceNameSub?:          number;
    PriorityCategoryUI?:    number;
    PriorityUI?:            number;
    SizeFactor?:            number;
    TerritoryType?:         number;
    AchievementIndex?:      string;
    "AddedIn5-3"?:          number;
    Aetheryte?:             number;
    ArrayEventHandler?:     number;
    BGM?:                   number;
    BattalionMode?:         number;
    Bg?:                    string;
    Bg_en?:                 string;
    ExVersion?:             number;
    ExclusiveType?:         number;
    FixedTime?:             string;
    IsPvpZone?:             number;
    LoadingImage?:          number;
    Map?:                   number;
    Mount?:                 number;
    MountSpeed?:            number;
    PCSearch?:              number;
    PlaceNameIcon?:         string;
    PlaceNameIconID?:       number;
    PlaceNameRegionIcon?:   string;
    PlaceNameRegionIconID?: number;
    PlaceNameZone?:         number;
    QuestBattle?:           number;
    Resident?:              number;
    Stealth?:               number;
    TerritoryIntendedUse?:  number;
    WeatherRate?:           number;
  }
  
}

export type SatisfactionNpc = SatisfactionNpcNS.SatisfactionNpc;
