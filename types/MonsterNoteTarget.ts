export interface MonsterNoteTargetIndex {
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
  Name: null;
  Url:  string;
}


export interface MonsterNoteTarget {
  BNpcName:                   BNpcName;
  BNpcNameTarget:             string;
  BNpcNameTargetID:           number;
  GameContentLinks:           GameContentLinks;
  ID:                         number;
  Icon:                       string;
  IconID:                     number;
  Patch:                      null;
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
  Url:                        string;
}

export interface BNpcName {
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

export interface GameContentLinks {
  MonsterNote: MonsterNote;
}

export interface MonsterNote {
  MonsterNoteTarget0: number[];
}

export interface PlaceName {
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

export interface Town {
  ID:      number;
  Icon:    string;
  IconID:  number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}
