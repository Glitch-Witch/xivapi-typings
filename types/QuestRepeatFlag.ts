
export namespace QuestRepeatFlagIndexNS {
  export type QuestRepeatFlagIndex = {
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

export type Index = QuestRepeatFlagIndexNS.QuestRepeatFlagIndex;

export namespace QuestRepeatFlagNS {
  export type QuestRepeatFlag = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Quest:            null;
    QuestTarget:      string;
    QuestTargetID:    number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Quest: Quest;
  }
  
  export type Quest = {
    QuestRepeatFlag: number[];
  }
  
}

export type QuestRepeatFlag = QuestRepeatFlagNS.QuestRepeatFlag;
