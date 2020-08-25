export interface GatheringTypeIndex {
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
  Name: string;
  Url:  string;
}


export interface GatheringType0 {
  GameContentLinks: GameContentLinks;
  ID:               number;
  IconMain:         string;
  IconMainID:       number;
  IconOff:          string;
  IconOffID:        number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  Patch:            null;
  Url:              string;
}

export interface GameContentLinks {
  GatheringPointBase:   Gathering;
  GatheringSubCategory: Gathering;
}

export interface Gathering {
  GatheringType: number[];
}
