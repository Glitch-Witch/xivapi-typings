export interface DeepDungeonBanIndex {
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
  Name: Name;
  Url:  string;
}

export interface Name {
  Description:    string;
  Description_de: string;
  Description_en: string;
  Description_fr: string;
  Description_ja: string;
  ID:             number;
  Icon:           string;
  IconID:         number;
  Name:           string;
  Name_de:        string;
  Name_en:        string;
  Name_fr:        string;
  Name_ja:        string;
}


export interface DeepDungeonBan {
  GameContentLinks:    any[];
  ID:                  number;
  LogMessage:          LogMessage;
  LogMessageTarget:    string;
  LogMessageTargetID:  number;
  Name:                Name;
  NameTarget:          string;
  NameTargetID:        number;
  Patch:               null;
  ScreenImage:         ScreenImage;
  ScreenImageTarget:   string;
  ScreenImageTargetID: number;
  Url:                 string;
}

export interface LogMessage {
  ID:      number;
  LogKind: number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}

export interface Name {
  Description:    string;
  Description_de: string;
  Description_en: string;
  Description_fr: string;
  Description_ja: string;
  ID:             number;
  Icon:           string;
  IconID:         number;
  Name:           string;
  Name_de:        string;
  Name_en:        string;
  Name_fr:        string;
  Name_ja:        string;
}

export interface ScreenImage {
  ID:             number;
  Image:          string;
  ImageID:        number;
  Jingle:         Jingle;
  JingleTarget:   string;
  JingleTargetID: number;
  Lang:           number;
  Type:           number;
}

export interface Jingle {
  ID: number;
}
