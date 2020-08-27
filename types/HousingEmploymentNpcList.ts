export interface HousingEmploymentNpcListIndex {
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
  ID:   string;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface HousingEmploymentNpcList {
  ENpcBase0:         ENpcBase0;
  ENpcBase0Target:   string;
  ENpcBase0TargetID: number;
  ENpcBase1:         ENpcBase1;
  ENpcBase1Target:   string;
  ENpcBase1TargetID: number;
  GameContentLinks:  any[];
  GamePatch:         GamePatch;
  ID:                string;
  Patch:             number;
  Race:              null;
  RaceTarget:        string;
  RaceTargetID:      number;
  Url:               string;
}

export interface ENpcBase {
  Balloon:              null;
  BalloonTarget:        string;
  BalloonTargetID:      number;
  Behavior:             null;
  BehaviorTarget:       string;
  BehaviorTargetID:     number;
  BodyType:             number;
  BustOrTone1:          number;
  DefaultBalloon:       number;
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
  ENpcData0:            number;
  ENpcData1:            number;
  ENpcData10:           number;
  ENpcData11:           number;
  ENpcData12:           number;
  ENpcData13:           number;
  ENpcData14:           number;
  ENpcData15:           number;
  ENpcData16:           number;
  ENpcData17:           number;
  ENpcData18:           number;
  ENpcData19:           number;
  ENpcData2:            number;
  ENpcData20:           number;
  ENpcData21:           number;
  ENpcData22:           number;
  ENpcData23:           number;
  ENpcData24:           number;
  ENpcData25:           number;
  ENpcData26:           number;
  ENpcData27:           number;
  ENpcData28:           number;
  ENpcData29:           number;
  ENpcData3:            number;
  ENpcData30:           number;
  ENpcData31:           number;
  ENpcData4:            number;
  ENpcData5:            number;
  ENpcData6:            number;
  ENpcData7:            number;
  ENpcData8:            number;
  ENpcData9:            number;
  EventHandler:         number;
  ExtraFeature1:        number;
  ExtraFeature2OrBust:  number;
  EyeColor:             number;
  EyeHeterochromia:     number;
  EyeShape:             number;
  Eyebrows:             number;
  Face:                 number;
  FacePaint:            number;
  FacePaintColor:       number;
  FacialFeature:        number;
  FacialFeatureColor:   number;
  Gender:               number;
  HairColor:            number;
  HairHighlight:        number;
  HairHighlightColor:   number;
  HairStyle:            number;
  Height:               number;
  ID:                   number;
  Important:            number;
  Invisibility:         number;
  Jaw:                  number;
  LipColor:             number;
  ModelBody:            number;
  ModelChara:           null;
  ModelCharaTarget:     string;
  ModelCharaTargetID:   number;
  ModelEars:            number;
  ModelFeet:            number;
  ModelHands:           number;
  ModelHead:            number;
  ModelLeftRing:        number;
  ModelLegs:            number;
  ModelMainHand:        Model;
  ModelNeck:            number;
  ModelOffHand:         Model;
  ModelRightRing:       number;
  ModelWrists:          number;
  Mouth:                number;
  Nose:                 number;
  NotRewriteHeight:     number;
  NpcEquip:             NpcEquip;
  NpcEquipTarget:       string;
  NpcEquipTargetID:     number;
  Race:                 Race;
  RaceTarget:           string;
  RaceTargetID:         number;
  Scale:                number;
  SkinColor:            number;
  Tribe:                ENpcBase0Tribe;
  TribeTarget:          string;
  TribeTargetID:        number;
  Visor:                number;
}

export enum Model {
  The0000 = "0, 0, 0, 0",
}

export interface NpcEquip {
  DyeBody:              DyeBody;
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
  ModelMainHand:        Model;
  ModelNeck:            number;
  ModelOffHand:         Model;
  ModelRightRing:       number;
  ModelWrists:          number;
  Visor:                number;
}

export interface DyeBody {
  Color:   number;
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
  Shade:   number;
}

export interface Race {
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

export interface Rse {
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
  Description:                Description;
  Description_de:             DescriptionDe;
  Description_en:             Description;
  Description_fr:             DescriptionFr;
  Description_ja:             DescriptionJa;
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
  ModelMain:                  ModelMain;
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

export enum Description {
  DescriptionFitsHyur = "Fits: Hyur ♂",
  FitsHyur = "Fits: Hyur ♀",
}

export enum DescriptionDe {
  BenötigtHyuran = "Benötigt: Hyuran ♀",
  DescriptionDeBenötigtHyuran = "Benötigt: Hyuran ♂",
}

export enum DescriptionFr {
  RéservéAuxHyures = "Réservé aux Hyures",
  RéservéAuxHyurs = "Réservé aux Hyurs",
}

export enum DescriptionJa {
  ヒューラン女性専用 = "ヒューラン女性専用",
  ヒューラン男性専用 = "ヒューラン男性専用",
}

export enum ModelMain {
  The84200 = "84, 2, 0, 0",
  The85200 = "85, 2, 0, 0",
}

export interface ENpcBaseTribe {
  DEX:           number;
  Hp:            number;
  ID:            number;
  INT:           string;
  MND:           number;
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

export interface ENpcBase {
  Balloon:              null;
  BalloonTarget:        string;
  BalloonTargetID:      number;
  Behavior:             null;
  BehaviorTarget:       string;
  BehaviorTargetID:     number;
  BodyType:             number;
  BustOrTone1:          number;
  DefaultBalloon:       number;
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
  ENpcData0:            number;
  ENpcData1:            number;
  ENpcData10:           number;
  ENpcData11:           number;
  ENpcData12:           number;
  ENpcData13:           number;
  ENpcData14:           number;
  ENpcData15:           number;
  ENpcData16:           number;
  ENpcData17:           number;
  ENpcData18:           number;
  ENpcData19:           number;
  ENpcData2:            number;
  ENpcData20:           number;
  ENpcData21:           number;
  ENpcData22:           number;
  ENpcData23:           number;
  ENpcData24:           number;
  ENpcData25:           number;
  ENpcData26:           number;
  ENpcData27:           number;
  ENpcData28:           number;
  ENpcData29:           number;
  ENpcData3:            number;
  ENpcData30:           number;
  ENpcData31:           number;
  ENpcData4:            number;
  ENpcData5:            number;
  ENpcData6:            number;
  ENpcData7:            number;
  ENpcData8:            number;
  ENpcData9:            number;
  EventHandler:         number;
  ExtraFeature1:        number;
  ExtraFeature2OrBust:  number;
  EyeColor:             number;
  EyeHeterochromia:     number;
  EyeShape:             number;
  Eyebrows:             number;
  Face:                 number;
  FacePaint:            number;
  FacePaintColor:       number;
  FacialFeature:        number;
  FacialFeatureColor:   number;
  Gender:               number;
  HairColor:            number;
  HairHighlight:        number;
  HairHighlightColor:   number;
  HairStyle:            number;
  Height:               number;
  ID:                   number;
  Important:            number;
  Invisibility:         number;
  Jaw:                  number;
  LipColor:             number;
  ModelBody:            number;
  ModelChara:           null;
  ModelCharaTarget:     string;
  ModelCharaTargetID:   number;
  ModelEars:            number;
  ModelFeet:            number;
  ModelHands:           number;
  ModelHead:            number;
  ModelLeftRing:        number;
  ModelLegs:            number;
  ModelMainHand:        Model;
  ModelNeck:            number;
  ModelOffHand:         Model;
  ModelRightRing:       number;
  ModelWrists:          number;
  Mouth:                number;
  Nose:                 number;
  NotRewriteHeight:     number;
  NpcEquip:             NpcEquip;
  NpcEquipTarget:       string;
  NpcEquipTargetID:     number;
  Race:                 Race;
  RaceTarget:           string;
  RaceTargetID:         number;
  Scale:                number;
  SkinColor:            number;
  Tribe:                ENpcBase1Tribe;
  TribeTarget:          string;
  TribeTargetID:        number;
  Visor:                number;
}

export interface ENpcBaseTribe {
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

export interface GamePatch {
  Banner:        string;
  ExName:        string;
  ExVersion:     number;
  ID:            number;
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
  Version:       string;
}
