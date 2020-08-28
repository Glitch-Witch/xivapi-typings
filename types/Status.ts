
export namespace StatusIndexNS {
  export type StatusIndex = {
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

export type Index = StatusIndexNS.StatusIndex;

export namespace StatusNS {
  export type Status = {
    CanDispel:         number;
    Category:          number;
    Description:       string;
    Description_de:    string;
    Description_en:    string;
    Description_fr:    string;
    Description_ja:    string;
    GameContentLinks:  any[];
    GamePatch:         GamePatch;
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
    Patch:             number;
    Transfiguration:   number;
    Url:               string;
    VFX:               Vfx;
    VFXTarget:         string;
    VFXTargetID:       number;
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
  
  export type Vfx = {
    ID:           number;
    VFX:          Location;
    VFX2:         null;
    VFX2Target:   string;
    VFX2TargetID: number;
    VFX3:         null;
    VFX3Target:   string;
    VFX3TargetID: number;
    VFXTarget:    string;
    VFXTargetID:  number;
  }
  
}

export type Status = StatusNS.Status;
