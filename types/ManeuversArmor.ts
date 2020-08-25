export interface ManeuversArmorIndex {
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


export interface ManeuversArmor1 {
  BNpcBase0:         BNpcBase;
  BNpcBase0Target:   string;
  BNpcBase0TargetID: number;
  BNpcBase1:         BNpcBase;
  BNpcBase1Target:   string;
  BNpcBase1TargetID: number;
  GameContentLinks:  any[];
  ID:                number;
  Icon0:             string;
  Icon0ID:           number;
  Icon1:             string;
  Icon1ID:           number;
  Icon2:             string;
  Icon2ID:           number;
  Icon3:             string;
  Icon3ID:           number;
  Icon4:             string;
  Icon4ID:           number;
  Patch:             null;
  Url:               string;
}

export interface BNpcBase {
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
