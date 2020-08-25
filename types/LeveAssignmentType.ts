export interface LeveAssignmentTypeIndex {
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
  Name: string;
  Url:  string;
}


export interface LeveAssignmentType1 {
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  Icon:             string;
  IconID:           number;
  IsFaction:        number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  Patch:            number;
  Url:              string;
}

export interface GameContentLinks {
  GuildleveAssignmentCategory: GuildleveAssignmentCategory;
  Leve:                        Leve;
}

export interface GuildleveAssignmentCategory {
  Category0: number[];
}

export interface Leve {
  LeveAssignmentType: number[];
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
