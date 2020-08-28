
export namespace ItemActionTelepoIndexNS {
  export type ItemActionTelepoIndex = {
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

export type Index = ItemActionTelepoIndexNS.ItemActionTelepoIndex;

export namespace ItemActionTelepoNS {
  export type ItemActionTelepo = {
    DenyMessage:         DenyMessage;
    DenyMessageTarget:   string;
    DenyMessageTargetID: number;
    GameContentLinks:    any[];
    ID:                  number;
    Patch:               null;
    Requirement:         number;
    Url:                 string;
  }
  
  export type DenyMessage = {
    ID:      number;
    LogKind: number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
}

export type ItemActionTelepo = ItemActionTelepoNS.ItemActionTelepo;
