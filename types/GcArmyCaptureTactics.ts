
export namespace GcArmyCaptureTacticsIndexNS {
  export type GcArmyCaptureTacticsIndex = {
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
    Name: Name;
    Url:  string;
  }
  
  export type Name = {
    CanDispel:         number;
    Category:          number;
    Description:       string;
    Description_de:    string;
    Description_en:    string;
    Description_fr:    string;
    Description_ja:    string;
    HitEffect:         HitEffect;
    HitEffectTarget:   string;
    HitEffectTargetID: number;
    ID:                number;
    Icon:              string;
    IconID:            number;
    InflictedByActor:  number;
    Invisibility:      number;
    IsFcBuff:          number;
    IsPermanent:       number;
    LockActions:       number;
    LockControl:       number;
    LockMovement:      number;
    Log:               number;
    MaxStacks:         number;
    Name:              string;
    Name_de:           string;
    Name_en:           string;
    Name_fr:           string;
    Name_ja:           string;
    PartyListPriority: number;
    Transfiguration:   number;
    VFX:               null;
    VFXTarget:         string;
    VFXTargetID:       number;
  }
  
  export type HitEffect = {
    ID:               number;
    Location:         Location;
    LocationTarget:   string;
    LocationTargetID: number;
  }
  
  export type Location = {
    ID:          number;
    Location:    string;
    Location_en: string;
  }
  
}

export type Index = GcArmyCaptureTacticsIndexNS.GcArmyCaptureTacticsIndex;

export namespace GcArmyCaptureTacticsNS {
  export type GcArmyCaptureTactics = {
    DamageDealt:      number;
    DamageReceived:   number;
    GameContentLinks: any[];
    HP:               number;
    ID:               number;
    Icon:             string;
    IconID:           number;
    Name:             Name;
    NameTarget:       string;
    NameTargetID:     number;
    Patch:            null;
    Tactic:           Tactic;
    TacticTarget:     string;
    TacticTargetID:   number;
    Url:              string;
  }
  
  export type Name = {
    CanDispel:         number;
    Category:          number;
    Description:       string;
    Description_de:    string;
    Description_en:    string;
    Description_fr:    string;
    Description_ja:    string;
    HitEffect:         HitEffect;
    HitEffectTarget:   string;
    HitEffectTargetID: number;
    ID:                number;
    Icon:              string;
    IconID:            number;
    InflictedByActor:  number;
    Invisibility:      number;
    IsFcBuff:          number;
    IsPermanent:       number;
    LockActions:       number;
    LockControl:       number;
    LockMovement:      number;
    Log:               number;
    MaxStacks:         number;
    Name:              string;
    Name_de:           string;
    Name_en:           string;
    Name_fr:           string;
    Name_ja:           string;
    PartyListPriority: number;
    Transfiguration:   number;
    VFX:               null;
    VFXTarget:         string;
    VFXTargetID:       number;
  }
  
  export type HitEffect = {
    ID:               number;
    Location:         Location;
    LocationTarget:   string;
    LocationTargetID: number;
  }
  
  export type Location = {
    ID:          number;
    Location:    string;
    Location_en: string;
  }
  
  export type Tactic = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
}

export type GcArmyCaptureTactics = GcArmyCaptureTacticsNS.GcArmyCaptureTactics;
