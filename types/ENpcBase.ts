
export namespace ENpcBaseIndexNS {
  export type ENpcBaseIndex = {
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

export type Index = ENpcBaseIndexNS.ENpcBaseIndex;

export namespace ENpcBaseNS {
  export type ENpcBase = {
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
    GameContentLinks:     any[];
    GamePatch:            GamePatch;
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
    ModelMainHand:        string;
    ModelNeck:            number;
    ModelOffHand:         string;
    ModelRightRing:       number;
    ModelWrists:          number;
    Mouth:                number;
    Nose:                 number;
    NotRewriteHeight:     number;
    NpcEquip:             null;
    NpcEquipTarget:       string;
    NpcEquipTargetID:     number;
    Patch:                number;
    Race:                 null;
    RaceTarget:           string;
    RaceTargetID:         number;
    Scale:                number;
    SkinColor:            number;
    Tribe:                null;
    TribeTarget:          string;
    TribeTargetID:        number;
    Url:                  string;
    Visor:                number;
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
  
}

export type ENpcBase = ENpcBaseNS.ENpcBase;
