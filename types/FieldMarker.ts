export interface FieldMarkerIndex {
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
  Icon: string;
  Name: null;
  Url:  string;
}


export interface FieldMarker1 {
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

export interface GamePatch {
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

export interface Vfx {
  ID:          number;
  Location:    string;
  Location_en: string;
}
