
export namespace CompleteJournalIndexNS {
  export type CompleteJournalIndex = {
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

export type Index = CompleteJournalIndexNS.CompleteJournalIndex;

export namespace CompleteJournalNS {
  export type CompleteJournal = {
    Cutscene0:          null;
    Cutscene0Target:    string;
    Cutscene0TargetID:  number;
    Cutscene1:          null;
    Cutscene10:         null;
    Cutscene10Target:   string;
    Cutscene10TargetID: number;
    Cutscene11:         null;
    Cutscene11Target:   string;
    Cutscene11TargetID: number;
    Cutscene12:         null;
    Cutscene12Target:   string;
    Cutscene12TargetID: number;
    Cutscene13:         null;
    Cutscene13Target:   string;
    Cutscene13TargetID: number;
    Cutscene14:         null;
    Cutscene14Target:   string;
    Cutscene14TargetID: number;
    Cutscene15:         null;
    Cutscene15Target:   string;
    Cutscene15TargetID: number;
    Cutscene16:         null;
    Cutscene16Target:   string;
    Cutscene16TargetID: number;
    Cutscene17:         null;
    Cutscene17Target:   string;
    Cutscene17TargetID: number;
    Cutscene18:         null;
    Cutscene18Target:   string;
    Cutscene18TargetID: number;
    Cutscene19:         null;
    Cutscene19Target:   string;
    Cutscene19TargetID: number;
    Cutscene1Target:    string;
    Cutscene1TargetID:  number;
    Cutscene2:          null;
    Cutscene20:         null;
    Cutscene20Target:   string;
    Cutscene20TargetID: number;
    Cutscene21:         null;
    Cutscene21Target:   string;
    Cutscene21TargetID: number;
    Cutscene22:         null;
    Cutscene22Target:   string;
    Cutscene22TargetID: number;
    Cutscene23:         null;
    Cutscene23Target:   string;
    Cutscene23TargetID: number;
    Cutscene2Target:    string;
    Cutscene2TargetID:  number;
    Cutscene3:          null;
    Cutscene3Target:    string;
    Cutscene3TargetID:  number;
    Cutscene4:          null;
    Cutscene4Target:    string;
    Cutscene4TargetID:  number;
    Cutscene5:          null;
    Cutscene5Target:    string;
    Cutscene5TargetID:  number;
    Cutscene6:          null;
    Cutscene6Target:    string;
    Cutscene6TargetID:  number;
    Cutscene7:          null;
    Cutscene7Target:    string;
    Cutscene7TargetID:  number;
    Cutscene8:          null;
    Cutscene8Target:    string;
    Cutscene8TargetID:  number;
    Cutscene9:          null;
    Cutscene9Target:    string;
    Cutscene9TargetID:  number;
    GameContentLinks:   any[];
    GamePatch:          GamePatch;
    ID:                 number;
    Icon:               string;
    IconID:             number;
    Name:               string;
    Name_de:            string;
    Name_en:            string;
    Name_fr:            string;
    Name_ja:            string;
    Patch:              number;
    RequiredLevel:      number;
    Url:                string;
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

export type CompleteJournal = CompleteJournalNS.CompleteJournal;
