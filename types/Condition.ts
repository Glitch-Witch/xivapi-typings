
export namespace ConditionIndexNS {
  export type ConditionIndex = {
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

export type Index = ConditionIndexNS.ConditionIndex;

export namespace ConditionNS {
  export type Condition = {
    GameContentLinks:   any[];
    ID:                 number;
    LogMessage:         LogMessage;
    LogMessageTarget:   string;
    LogMessageTargetID: number;
    Patch:              null;
    Url:                string;
  }
  
  export type LogMessage = {
    ID:      number;
    LogKind: number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
}

export type Condition = ConditionNS.Condition;
