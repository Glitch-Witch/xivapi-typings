
export namespace FieldMarkerIndexNS {
  export type FieldMarkerIndex = {
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
    Icon: string;
    Name: null;
    Url:  string;
  }
  
}

export type Index = FieldMarkerIndexNS.FieldMarkerIndex;

export namespace FieldMarkerNS {
  export type FieldMarker = {
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Icon:             string;
    IconID:           number;
    Patch:            number;
    Url:              string;
    VFX:              Vfx;
    VFXTarget:        string;
    VFXTargetID:      number;
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
  
  export type Vfx = {
    ID:          number;
    Location:    string;
    Location_en: string;
  }
  
}

export type FieldMarker = FieldMarkerNS.FieldMarker;
