
export namespace EquipSlotCategoryIndexNS {
  export type EquipSlotCategoryIndex = {
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

export type Index = EquipSlotCategoryIndexNS.EquipSlotCategoryIndex;

export namespace EquipSlotCategoryNS {
  export type EquipSlotCategory = {
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
  
  export type GameContentLinks = {
    Item: Item;
  }
  
  export type Item = {
    EquipSlotCategory: number[];
  }
  
}

export type EquipSlotCategory = EquipSlotCategoryNS.EquipSlotCategory;
