export interface EventIconTypeIndex {
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


export interface EventIconType1 {
  GameContentLinks:   GameContentLinks;
  ID:                 number;
  IconRange:          number;
  MapIconAvailable:   string;
  MapIconAvailableID: number;
  MapIconInvalid:     string;
  MapIconInvalidID:   number;
  NpcIconAvailable:   string;
  NpcIconAvailableID: number;
  NpcIconInvalid:     string;
  NpcIconInvalidID:   number;
  Patch:              null;
  Url:                string;
}

export interface GameContentLinks {
  Quest: Quest;
}

export interface Quest {
  EventIconType: number[];
}
