
export namespace QuickChatIndexNS {
  export type QuickChatIndex = {
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
    Name: null;
    Url:  string;
  }
  
}

export type Index = QuickChatIndexNS.QuickChatIndex;

export namespace QuickChatNS {
  export type QuickChat = {
    Addon:                      Addon;
    AddonTarget:                string;
    AddonTargetID:              number;
    GameContentLinks:           any[];
    ID:                         number;
    Icon:                       string;
    IconID:                     number;
    NameAction:                 string;
    NameAction_de:              string;
    NameAction_en:              string;
    NameAction_fr:              string;
    NameAction_ja:              string;
    Patch:                      null;
    QuickChatTransient:         QuickChatTransient;
    QuickChatTransientTarget:   string;
    QuickChatTransientTargetID: number;
    TextOutput:                 string;
    TextOutput_de:              string;
    TextOutput_en:              string;
    TextOutput_fr:              string;
    TextOutput_ja:              string;
    TransientTextOutput:        string;
    TransientTextOutput_de:     string;
    TransientTextOutput_en:     string;
    TransientTextOutput_fr:     string;
    TransientTextOutput_ja:     string;
    Url:                        string;
  }
  
  export type Addon = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
  export type QuickChatTransient = {
    ID:            number;
    TextOutput:    string;
    TextOutput_de: string;
    TextOutput_en: string;
    TextOutput_fr: string;
    TextOutput_ja: string;
  }
  
}

export type QuickChat = QuickChatNS.QuickChat;
