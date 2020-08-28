
export namespace AnimaWeapon5PatternGroupIndexNS {
  export type AnimaWeaponPatternGroupIndex = {
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
    Name: string;
    Url:  string;
  }

}

export type Index = AnimaWeapon5PatternGroupIndexNS.AnimaWeaponPatternGroupIndex;

export namespace AnimaWeapon5PatternGroupNS {
  export type AnimaWeaponPatternGroup = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            number;
    Url:              string;
  }

  export type GameContentLinks = {
    AnimaWeapon5TradeItem: AnimaWeapon5TradeItem;
  }

  export type AnimaWeapon5TradeItem = {
    Category: number[];
  }

  export type GamePatch = {
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

}

export type AnimaWeapon5PatternGroup = AnimaWeapon5PatternGroupNS.AnimaWeaponPatternGroup;
