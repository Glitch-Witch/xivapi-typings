
export namespace HousingPresetIndexNS {
  export type HousingPresetIndex = {
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

export type Index = HousingPresetIndexNS.HousingPresetIndex;

export namespace HousingPresetNS {
  export type HousingPreset = {
    Adjective:                  number;
    Article:                    number;
    BasementFlooring:           null;
    BasementFlooringTarget:     string;
    BasementFlooringTargetID:   number;
    BasementLighting:           null;
    BasementLightingTarget:     string;
    BasementLightingTargetID:   number;
    BasementWall:               null;
    BasementWallTarget:         string;
    BasementWallTargetID:       number;
    ExteriorDoor:               null;
    ExteriorDoorTarget:         string;
    ExteriorDoorTargetID:       number;
    ExteriorRoof:               null;
    ExteriorRoofTarget:         string;
    ExteriorRoofTargetID:       number;
    ExteriorWall:               null;
    ExteriorWallTarget:         string;
    ExteriorWallTargetID:       number;
    ExteriorWindow:             null;
    ExteriorWindowTarget:       string;
    ExteriorWindowTargetID:     number;
    GameContentLinks:           any[];
    HousingSize:                number;
    ID:                         number;
    InteriorFlooring:           null;
    InteriorFlooringTarget:     string;
    InteriorFlooringTargetID:   number;
    InteriorLighting:           null;
    InteriorLightingTarget:     string;
    InteriorLightingTargetID:   number;
    InteriorWall:               null;
    InteriorWallTarget:         string;
    InteriorWallTargetID:       number;
    MansionLighting:            null;
    MansionLightingTarget:      string;
    MansionLightingTargetID:    number;
    OtherFloorFlooring:         null;
    OtherFloorFlooringTarget:   string;
    OtherFloorFlooringTargetID: number;
    OtherFloorLighting:         null;
    OtherFloorLightingTarget:   string;
    OtherFloorLightingTargetID: number;
    OtherFloorWall:             null;
    OtherFloorWallTarget:       string;
    OtherFloorWallTargetID:     number;
    Patch:                      null;
    PlaceName:                  null;
    PlaceNameTarget:            string;
    PlaceNameTargetID:          number;
    Plural:                     string;
    Plural_de:                  string;
    Plural_en:                  string;
    Plural_fr:                  string;
    Plural_ja:                  string;
    PossessivePronoun:          number;
    Pronoun:                    number;
    Singular:                   string;
    Singular_de:                string;
    Singular_en:                string;
    Singular_fr:                string;
    Singular_ja:                string;
    StartsWithVowel:            number;
    Url:                        string;
  }
  
}

export type HousingPreset = HousingPresetNS.HousingPreset;
