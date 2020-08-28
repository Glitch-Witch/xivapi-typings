
export namespace AnimaWeaponIconIndexNS {
  export type AnimaWeaponIconIndex = {
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

export type Index = AnimaWeaponIconIndexNS.AnimaWeaponIconIndex;

export namespace AnimaWeaponIconNS {
  export type AnimaWeaponIcon = {
    GameContentLinks:  any[];
    Hyperconductive:   string;
    HyperconductiveID: number;
    ID:                number;
    Patch:             null;
    Reborn:            string;
    RebornID:          number;
    Sharpened:         string;
    SharpenedID:       number;
    Url:               string;
    Zodiac:            string;
    ZodiacID:          number;
    ZodiacLux:         string;
    ZodiacLuxID:       number;
  }
  
}

export type AnimaWeaponIcon = AnimaWeaponIconNS.AnimaWeaponIcon;
