export interface PresetCameraAdjustIndex {
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


export interface PresetCameraAdjust {
  Elezen_F:         number;
  Elezen_M:         number;
  GameContentLinks: any[];
  Hrothgar_F:       string;
  Hrothgar_M:       number;
  Hyur_F:           number;
  Hyur_M:           number;
  ID:               number;
  Lalafell_F:       number;
  Lalafell_M:       number;
  Miqote_F:         number;
  Miqote_M:         number;
  Patch:            null;
  Roe_F:            number;
  Roe_M:            string;
  Url:              string;
  Viera_F:          number;
  Viera_M:          string;
}
