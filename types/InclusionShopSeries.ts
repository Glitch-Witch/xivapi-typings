
export namespace InclusionShopSeriesIndexNS {
  export type InclusionShopSeriesIndex = {
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
    ID:   string;
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = InclusionShopSeriesIndexNS.InclusionShopSeriesIndex;

export namespace InclusionShopSeriesNS {
  export type InclusionShopSeries = {
    GameContentLinks:    any[];
    GamePatch:           GamePatch;
    ID:                  string;
    Patch:               number;
    SpecialShop:         { [key: string]: SpecialShopClass | SpecialShopEnum | number | null };
    SpecialShopTarget:   string;
    SpecialShopTargetID: number;
    Url:                 string;
  }
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    IsExpansion:   boolean;
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
    Url:           string;
    Version:       string;
  }
  
  export type SpecialShopClass = {
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
    ClassJobCategory?:           number;
    ClassJobRepair?:             number;
    ClassJobUse?:                number;
    CooldownS?:                  number;
    DamageMag?:                  number;
    DamagePhys?:                 number;
    DefenseMag?:                 number;
    DefensePhys?:                number;
    DelayMs?:                    number;
    Description?:                string;
    Description_de?:             string;
    Description_en?:             string;
    Description_fr?:             string;
    Description_ja?:             DescriptionJa;
    Desynth?:                    number;
    EquipRestriction?:           number;
    EquipSlotCategory?:          number;
    FilterGroup?:                number;
    GrandCompany?:               number;
    ID:                          number;
    Icon?:                       string;
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
    ModelSub?:                   ModelSub;
    Name:                        string;
    Name_de:                     string;
    Name_en:                     string;
    Name_fr:                     string;
    Name_ja:                     string;
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
  }
  
  export enum DescriptionJa {
    Empty = "",
    水神リヴァイアサンの魔力が宿った不気味な鏡 = "水神リヴァイアサンの魔力が宿った不気味な鏡",
    氷神シヴァの魔力が宿った氷の結晶 = "氷神シヴァの魔力が宿った氷の結晶",
  }
  
  export enum ModelSub {
    The0000 = "0, 0, 0, 0",
  }
  
  export enum SpecialShopEnum {
    Achievement = "Achievement",
    DefaultTalk = "DefaultTalk",
    GSt100115PrimaeAusrüstung = "[G.-St. 100-115] Primae-Ausrüstung",
    ILv100115蛮神装備 = "【ILv100～115】蛮神装備",
    Item = "Item",
    NvObj100115ÉquipementDESPrimordiaux = "[NvObj 100-115] Équipement des Primordiaux",
    PrimalGearIL100115 = "Primal Gear (IL 100-115)",
    Quest = "Quest",
    SpecialShopItemCategory = "SpecialShopItemCategory",
  }
  
}

export type InclusionShopSeries = InclusionShopSeriesNS.InclusionShopSeries;
