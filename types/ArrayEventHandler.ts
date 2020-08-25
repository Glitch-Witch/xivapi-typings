export interface ArrayEventHandlerIndex {
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


export interface ArrayEventHandler851968 {
  Data0:            number;
  Data1:            number;
  Data10:           number;
  Data11:           number;
  Data12:           number;
  Data13:           number;
  Data14:           number;
  Data15:           number;
  Data2:            number;
  Data3:            number;
  Data4:            number;
  Data5:            number;
  Data6:            number;
  Data7:            number;
  Data8:            number;
  Data9:            number;
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               number;
  Patch:            number;
  Url:              string;
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
