export interface GcArmyCaptureTacticsIndex {
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
  Icon: string;
  Name: Name;
  Url:  string;
}

export interface Name {
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

export interface HitEffect {
  ID:               number;
  Location:         Location;
  LocationTarget:   string;
  LocationTargetID: number;
}

export interface Location {
  ID:          number;
  Location:    string;
  Location_en: string;
}


export interface GcArmyCaptureTactics1 {
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

export interface Name {
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

export interface HitEffect {
  ID:               number;
  Location:         Location;
  LocationTarget:   string;
  LocationTargetID: number;
}

export interface Location {
  ID:          number;
  Location:    string;
  Location_en: string;
}

export interface Tactic {
  ID:      number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}
