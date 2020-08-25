export interface GuildOrderIndex {
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
  Icon: null;
  Name: null;
  Url:  string;
}


export interface GuildOrder1 {
  CompletionBonusExp: number;
  CompletionBonusGil: number;
  Description1:       string;
  Description1_de:    string;
  Description1_en:    string;
  Description1_fr:    string;
  Description1_ja:    string;
  Description2:       string;
  Description2_de:    string;
  Description2_en:    string;
  Description2_fr:    string;
  Description2_ja:    string;
  Description3:       string;
  Description3_de:    string;
  Description3_en:    string;
  Description3_fr:    string;
  Description3_ja:    string;
  ENpcName:           ENpcName;
  ENpcNameTarget:     string;
  ENpcNameTargetID:   number;
  GameContentLinks:   any[];
  GamePatch:          GamePatch;
  ID:                 number;
  Objective:          string;
  Objective_de:       string;
  Objective_en:       string;
  Objective_fr:       string;
  Objective_ja:       string;
  Patch:              number;
  RewardExp:          number;
  RewardGil:          number;
  Url:                string;
}

export interface ENpcName {
  Adjective:         number;
  Article:           number;
  ID:                number;
  Icon:              string;
  Map:               number;
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
  Title:             string;
  Title_de:          string;
  Title_en:          string;
  Title_fr:          string;
  Title_ja:          string;
}

export interface GamePatch {
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
