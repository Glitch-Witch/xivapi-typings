
export namespace MapMarkerIndexNS {
  export type MapMarkerIndex = {
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
    ID:   string;
    Icon: string;
    Name: null;
    Url:  string;
  }
  
}

export type Index = MapMarkerIndexNS.MapMarkerIndex;

export namespace MapMarkerNS {
  export type MapMarker = {
    DataKey:                  number;
    DataType:                 number;
    GameContentLinks:         any[];
    GamePatch:                GamePatch;
    ID:                       string;
    Icon:                     string;
    IconID:                   number;
    MapMarkerRegion:          null;
    MapMarkerRegionTarget:    string;
    MapMarkerRegionTargetID:  number;
    Patch:                    number;
    PlaceNameSubtext:         PlaceNameSubtext;
    PlaceNameSubtextTarget:   string;
    PlaceNameSubtextTargetID: number;
    SubtextOrientation:       number;
    Type:                     number;
    Url:                      string;
    X:                        number;
    Y:                        number;
  }
  
  export type GamePatch = {
    Banner:        null;
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
  
  export type PlaceNameSubtext = {
    ID:               number;
    Icon:             string;
    Name:             string;
    NameNoArticle:    string;
    NameNoArticle_de: string;
    NameNoArticle_en: string;
    NameNoArticle_fr: string;
    NameNoArticle_ja: string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
  }
  
}

export type MapMarker = MapMarkerNS.MapMarker;
