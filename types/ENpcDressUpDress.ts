export interface ENpcDressUpDressIndex {
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


export interface ENpcDressUpDress10 {
  "AddedIn5-30":       number;
  Behavior:            null;
  BehaviorTarget:      string;
  BehaviorTargetID:    number;
  DyeBody:             null;
  DyeBodyTarget:       string;
  DyeBodyTargetID:     number;
  DyeFeet:             null;
  DyeFeetTarget:       string;
  DyeFeetTargetID:     number;
  DyeHands:            null;
  DyeHandsTarget:      string;
  DyeHandsTargetID:    number;
  DyeHead:             null;
  DyeHeadTarget:       string;
  DyeHeadTargetID:     number;
  DyeLegs:             null;
  DyeLegsTarget:       string;
  DyeLegsTargetID:     number;
  DyeMainHand:         null;
  DyeMainHandTarget:   string;
  DyeMainHandTargetID: string;
  DyeOffHand:          null;
  DyeOffHandTarget:    string;
  DyeOffHandTargetID:  string;
  ENpc:                null;
  ENpcTarget:          string;
  ENpcTargetID:        number;
  GameContentLinks:    any[];
  GamePatch:           GamePatch;
  ID:                  string;
  ModelBody:           number;
  ModelFeet:           number;
  ModelHands:          number;
  ModelHead:           number;
  ModelLegs:           number;
  ModelMainHand:       number;
  ModelOffHand:        number;
  Patch:               number;
  Url:                 string;
}

export interface GamePatch {
  Banner:        string;
  ExName:        string;
  ExVersion:     number;
  ID:            number;
  IsExpansion:   boolean;
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
  Url:           string;
  Version:       string;
}
