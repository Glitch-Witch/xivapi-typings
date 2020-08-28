
export namespace TextCommandIndexNS {
  export type TextCommandIndex = {
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

export type Index = TextCommandIndexNS.TextCommandIndex;

export namespace TextCommandNS {
  export type TextCommand = {
    Alias:            string;
    Alias_de:         string;
    Alias_en:         string;
    Alias_fr:         string;
    Alias_ja:         string;
    Command:          string;
    Command_de:       string;
    Command_en:       string;
    Command_fr:       string;
    Command_ja:       string;
    Description:      string;
    Description_de:   string;
    Description_en:   string;
    Description_fr:   string;
    Description_ja:   string;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    ShortAlias:       string;
    ShortAlias_de:    string;
    ShortAlias_en:    string;
    ShortAlias_fr:    string;
    ShortAlias_ja:    string;
    ShortCommand:     string;
    ShortCommand_de:  string;
    ShortCommand_en:  string;
    ShortCommand_fr:  string;
    ShortCommand_ja:  string;
    Url:              string;
  }
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    Name:          string;
    Name_cn:       string;
    Name_de:       string;
    Name_en:       string;
    Name_fr:       string;
    Name_ja:       string;
    Name_kr:       string;
    PatchNotes:    string;
    PatchNotes_de: string;
    PatchNotes_en: string;
    PatchNotes_fr: string;
    PatchNotes_ja: string;
    ReleaseDate:   number;
    Version:       string;
  }
  
}

export type TextCommand = TextCommandNS.TextCommand;
