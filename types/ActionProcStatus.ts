
export namespace ActionProcStatusIndexNS {
  export type ActionProcStatusIndex = {
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

export type Index = ActionProcStatusIndexNS.ActionProcStatusIndex;

export namespace ActionProcStatusNS {
  export type ActionProcStatus = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Status:           Status;
    StatusTarget:     string;
    StatusTargetID:   number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Action: Action;
  }
  
  export type Action = {
    ActionProcStatus: number[];
  }
  
  export type Status = {
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

export type ActionProcStatus = ActionProcStatusNS.ActionProcStatus;
