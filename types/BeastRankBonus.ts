export interface BeastRankBonusIndex {
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


export interface BeastRankBonus {
  "Allied/Bloodsworn": number;
  Friendly:            number;
  GameContentLinks:    GameContentLinks;
  Honored:             number;
  ID:                  number;
  Item:                null;
  ItemQuantity0:       number;
  ItemQuantity1:       number;
  ItemQuantity2:       number;
  ItemQuantity3:       number;
  ItemQuantity4:       number;
  ItemQuantity5:       number;
  ItemQuantity6:       number;
  ItemQuantity7:       number;
  ItemTarget:          string;
  ItemTargetID:        number;
  Neutral:             number;
  Patch:               null;
  Recognized:          number;
  Respected:           number;
  Sworn:               number;
  Trusted:             number;
  Url:                 string;
}

export interface GameContentLinks {
  BeastTribe: BeastTribe;
}

export interface BeastTribe {
  BeastRankBonus: number[];
}
