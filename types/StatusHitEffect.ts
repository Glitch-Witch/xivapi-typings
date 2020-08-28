
export namespace StatusHitEffectIndexNS {
  export type StatusHitEffectIndex = {
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

export type Index = StatusHitEffectIndexNS.StatusHitEffectIndex;

export namespace StatusHitEffectNS {
  export type StatusHitEffect = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Location:         Location;
    LocationTarget:   string;
    LocationTargetID: number;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Status: Status;
  }
  
  export type Status = {
    HitEffect: number[];
  }
  
  export type Location = {
    ID:          number;
    Location:    string;
    Location_en: string;
  }
  
}

export type StatusHitEffect = StatusHitEffectNS.StatusHitEffect;
