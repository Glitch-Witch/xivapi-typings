
export namespace HousingFurnitureIndexNS {
  export type HousingFurnitureIndex = {
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

export type Index = HousingFurnitureIndexNS.HousingFurnitureIndex;

export namespace HousingFurnitureNS {
  export type HousingFurniture = {
    AquariumTier:        number;
    CustomTalk:          null;
    CustomTalkTarget:    string;
    CustomTalkTargetID:  number;
    DestroyOnRemoval:    number;
    GameContentLinks:    any[];
    GamePatch:           GamePatch;
    HousingItemCategory: number;
    ID:                  number;
    Item:                null;
    ItemTarget:          string;
    ItemTargetID:        number;
    ModelKey:            number;
    Patch:               number;
    Tooltip:             null;
    TooltipTarget:       string;
    TooltipTargetID:     number;
    Url:                 string;
    UsageParameter:      number;
    UsageType:           number;
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
  
}

export type HousingFurniture = HousingFurnitureNS.HousingFurniture;
