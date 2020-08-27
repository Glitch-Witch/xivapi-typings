export interface ContentsNoteIndex {
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
  Icon: string;
  Name: string;
  Url:  string;
}


export interface ContentsNote {
  ContentType:         ContentType;
  ContentTypeTarget:   string;
  ContentTypeTargetID: number;
  Description:         string;
  Description_de:      string;
  Description_en:      string;
  Description_fr:      string;
  Description_ja:      string;
  ExpCap:              number;
  ExpMultiplier:       number;
  GameContentLinks:    any[];
  GamePatch:           GamePatch;
  GilRward:            number;
  HowTo:               HowTo;
  HowToTarget:         string;
  HowToTargetID:       number;
  ID:                  number;
  Icon:                string;
  IconID:              number;
  LevelUnlock:         number;
  MenuOrder:           number;
  Name:                string;
  Name_de:             string;
  Name_en:             string;
  Name_fr:             string;
  Name_ja:             string;
  Patch:               number;
  ReqUnlock:           number;
  RequiredAmount:      number;
  Reward0:             number;
  Reward1:             number;
  Url:                 string;
}

export interface ContentType {
  ID: number;
}

export interface GamePatch {
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

export interface HowTo {
  Category:         Category;
  CategoryTarget:   string;
  CategoryTargetID: number;
  ID:               number;
  Images0:          Images;
  Images0Target:    string;
  Images0TargetID:  number;
  Images1:          Images;
  Images1Target:    string;
  Images1TargetID:  number;
  Images2:          Images;
  Images2Target:    string;
  Images2TargetID:  number;
  Images3:          null;
  Images3Target:    string;
  Images3TargetID:  number;
  Images4:          null;
  Images4Target:    string;
  Images4TargetID:  number;
  Images5:          null;
  Images5Target:    string;
  Images5TargetID:  number;
  Images6:          null;
  Images6Target:    string;
  Images6TargetID:  number;
  Images7:          null;
  Images7Target:    string;
  Images7TargetID:  number;
  Images8:          null;
  Images8Target:    string;
  Images8TargetID:  number;
  Images9:          null;
  Images9Target:    string;
  Images9TargetID:  number;
}

export interface Category {
  Category:    string;
  Category_de: string;
  Category_en: string;
  Category_fr: string;
  Category_ja: string;
  ID:          number;
}

export interface Images {
  ID:      number;
  Image:   string;
  ImageID: number;
}
