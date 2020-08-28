
export namespace HousingAethernetIndexNS {
  export type HousingAethernetIndex = {
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

export type Index = HousingAethernetIndexNS.HousingAethernetIndex;

export namespace HousingAethernetNS {
  export type HousingAethernet = {
    GameContentLinks:      any[];
    GamePatch:             GamePatch;
    ID:                    number;
    Level:                 null;
    LevelTarget:           string;
    LevelTargetID:         number;
    Order:                 number;
    Patch:                 number;
    PlaceName:             null;
    PlaceNameTarget:       string;
    PlaceNameTargetID:     number;
    TerritoryType:         null;
    TerritoryTypeTarget:   string;
    TerritoryTypeTargetID: number;
    Url:                   string;
  }
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
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
    Version:       string;
  }
  
}

export type HousingAethernet = HousingAethernetNS.HousingAethernet;
