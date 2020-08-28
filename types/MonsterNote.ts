
export namespace MonsterNoteIndexNS {
  export type MonsterNoteIndex = {
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

export type Index = MonsterNoteIndexNS.MonsterNoteIndex;

export namespace MonsterNoteNS {
  export type MonsterNote = {
    Count0:                     number;
    Count1:                     number;
    Count2:                     number;
    Count3:                     number;
    GameContentLinks:           any[];
    GamePatch:                  GamePatch;
    ID:                         number;
    MonsterNoteTarget0:         MonsterNoteTarget0;
    MonsterNoteTarget0Target:   string;
    MonsterNoteTarget0TargetID: number;
    MonsterNoteTarget1:         null;
    MonsterNoteTarget1Target:   string;
    MonsterNoteTarget1TargetID: number;
    MonsterNoteTarget2:         null;
    MonsterNoteTarget2Target:   string;
    MonsterNoteTarget2TargetID: number;
    MonsterNoteTarget3:         null;
    MonsterNoteTarget3Target:   string;
    MonsterNoteTarget3TargetID: number;
    Name:                       string;
    Name_de:                    string;
    Name_en:                    string;
    Name_fr:                    string;
    Name_ja:                    string;
    Patch:                      number;
    Reward:                     number;
    Url:                        string;
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
  
  export type MonsterNoteTarget0 = {
    BNpcName:                   BNpcName;
    BNpcNameTarget:             string;
    BNpcNameTargetID:           number;
    ID:                         number;
    Icon:                       string;
    IconID:                     number;
    PlaceNameLocation0:         PlaceName;
    PlaceNameLocation0Target:   string;
    PlaceNameLocation0TargetID: number;
    PlaceNameLocation1:         PlaceName;
    PlaceNameLocation1Target:   string;
    PlaceNameLocation1TargetID: number;
    PlaceNameLocation2:         PlaceName;
    PlaceNameLocation2Target:   string;
    PlaceNameLocation2TargetID: number;
    PlaceNameZone0:             PlaceName;
    PlaceNameZone0Target:       string;
    PlaceNameZone0TargetID:     number;
    PlaceNameZone1:             PlaceName;
    PlaceNameZone1Target:       string;
    PlaceNameZone1TargetID:     number;
    PlaceNameZone2:             PlaceName;
    PlaceNameZone2Target:       string;
    PlaceNameZone2TargetID:     number;
    Town:                       Town;
    TownTarget:                 string;
    TownTargetID:               number;
  }
  
  export type BNpcName = {
    Adjective:         number;
    Article:           number;
    ID:                number;
    Icon:              string;
    Name:              string;
    Name_de:           string;
    Name_en:           string;
    Name_fr:           string;
    Name_ja:           string;
    Plural:            string;
    Plural_de:         string;
    Plural_en:         string;
    Plural_fr:         string;
    Plural_ja:         string;
    PossessivePronoun: number;
    Pronoun:           number;
    StartsWithVowel:   number;
  }
  
  export type PlaceName = {
    ID:               number;
    Icon:             string;
    Name:             string;
    NameNoArticle:    string;
    NameNoArticle_de: string;
    NameNoArticle_en: string;
    NameNoArticle_fr: string;
    NameNoArticle_ja: string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
  }
  
  export type Town = {
    ID:      number;
    Icon:    string;
    IconID:  number;
    Name:    string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
  }
  
}

export type MonsterNote = MonsterNoteNS.MonsterNote;
