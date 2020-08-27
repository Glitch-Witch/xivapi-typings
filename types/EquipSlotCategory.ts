export interface EquipSlotCategoryIndex {
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


export interface EquipSlotCategory {
  Body:             number;
  Ears:             number;
  Feet:             number;
  FingerL:          number;
  FingerR:          number;
  GameContentLinks: GameContentLinks;
  Gloves:           number;
  Head:             number;
  ID:               number;
  Legs:             number;
  MainHand:         number;
  Neck:             number;
  OffHand:          number;
  Patch:            null;
  SoulCrystal:      number;
  Url:              string;
  Waist:            number;
  Wrists:           number;
}

export interface GameContentLinks {
  Item: Item;
}

export interface Item {
  EquipSlotCategory: number[];
}
