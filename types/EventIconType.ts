
export namespace EventIconTypeIndexNS {
  export type EventIconTypeIndex = {
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

export type Index = EventIconTypeIndexNS.EventIconTypeIndex;

export namespace EventIconTypeNS {
  export type EventIconType = {
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
  
  export type GameContentLinks = {
    Quest: Quest;
  }
  
  export type Quest = {
    EventIconType: number[];
  }
  
}

export type EventIconType = EventIconTypeNS.EventIconType;
