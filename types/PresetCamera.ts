export interface PresetCameraIndex {
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


export interface PresetCamera {
  EID:              number;
  Elezen:           number;
  Elezen_F:         number;
  GameContentLinks: any[];
  Hrothgar:         string;
  Hrothgar_F:       string;
  Hyur_F:           number;
  ID:               number;
  Lalafell:         string;
  Lalafell_F:       string;
  Miqote:           string;
  Miqote_F:         string;
  Patch:            null;
  PosX:             number;
  PosY:             string;
  PosZ:             string;
  Roe:              string;
  Roe_F:            string;
  Url:              string;
  Viera:            string;
  Viera_F:          number;
}
