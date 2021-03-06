
export namespace EventItemIndexNS {
  export type EventItemIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = EventItemIndexNS.EventItemIndex;

export namespace EventItemNS {
  export type EventItem = {
    Action:               null;
    ActionTarget:         string;
    ActionTargetID:       number;
    Adjective:            number;
    Article:              number;
    CastTime:             number;
    CastTimeline:         null;
    CastTimelineTarget:   string;
    CastTimelineTargetID: number;
    GameContentLinks:     any[];
    GamePatch:            GamePatch;
    ID:                   number;
    Icon:                 string;
    IconID:               number;
    Name:                 string;
    Name_de:              string;
    Name_en:              string;
    Name_fr:              string;
    Name_ja:              string;
    Patch:                number;
    Plural:               string;
    Plural_de:            string;
    Plural_en:            string;
    Plural_fr:            string;
    Plural_ja:            string;
    PossessivePronoun:    number;
    Pronoun:              number;
    Quest:                null;
    QuestTarget:          string;
    QuestTargetID:        number;
    Singular:             string;
    Singular_de:          string;
    Singular_en:          string;
    Singular_fr:          string;
    Singular_ja:          string;
    StackSize:            number;
    StartsWithVowel:      number;
    Timeline:             number;
    Url:                  string;
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
  
}

export type EventItem = EventItemNS.EventItem;
