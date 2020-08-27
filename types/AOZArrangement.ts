export interface AOZArrangementIndex {
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
  ID:   string;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface AOZArrangement {
  AOZContentBriefingBNpc:         AOZContentBriefingBNpc;
  AOZContentBriefingBNpcTarget:   string;
  AOZContentBriefingBNpcTargetID: number;
  GameContentLinks:               null;
  ID:                             string;
  Url:                            string;
}

export interface AOZContentBriefingBNpc {
  BNpcName:                BNpcName;
  BNpcNameTarget:          string;
  BNpcNameTargetID:        number;
  BindResistance:          number;
  BlindResistance:         number;
  Blunt:                   number;
  Earth:                   number;
  Endurance:               number;
  Fire:                    number;
  HeavyResistance:         number;
  ID:                      number;
  Ice:                     number;
  InstaDeathResistance:    number;
  Magic:                   number;
  ParalysisResistance:     number;
  PetrificationResistance: number;
  Piercing:                number;
  SilenceResistance:       number;
  Slashing:                number;
  SleepResistance:         number;
  SlowResistance:          number;
  StunResistance:          number;
  TargetLarge:             string;
  TargetLargeID:           number;
  TargetSmall:             string;
  TargetSmallID:           number;
  Thunder:                 number;
  Water:                   number;
  Wind:                    number;
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
