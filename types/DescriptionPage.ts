export interface DescriptionPageIndex {
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
  ID:   string;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface DescriptionPage10 {
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               string;
  Image1:           string;
  Image1ID:         number;
  Image2:           string;
  Image2ID:         number;
  Image3:           string;
  Image3ID:         number;
  Image4:           string;
  Image4ID:         number;
  Image5:           string;
  Image5ID:         number;
  Image6:           string;
  Image6ID:         number;
  Image7:           string;
  Image7ID:         number;
  Image8:           string;
  Image8ID:         number;
  Image9:           string;
  Image9ID:         number;
  Patch:            number;
  Quest:            null;
  QuestTarget:      string;
  QuestTargetID:    number;
  Text1:            null;
  Text1Target:      string;
  Text1TargetID:    number;
  Text2:            null;
  Text2Target:      string;
  Text2TargetID:    number;
  Text3:            null;
  Text3Target:      string;
  Text3TargetID:    number;
  Text4:            null;
  Text4Target:      string;
  Text4TargetID:    number;
  Text5:            null;
  Text5Target:      string;
  Text5TargetID:    number;
  Text6:            null;
  Text6Target:      string;
  Text6TargetID:    number;
  Text7:            null;
  Text7Target:      string;
  Text7TargetID:    number;
  Text8:            null;
  Text8Target:      string;
  Text8TargetID:    number;
  Text9:            null;
  Text9Target:      string;
  Text9TargetID:    number;
  Url:              string;
}

export interface GamePatch {
  Banner:        string;
  ExName:        string;
  ExVersion:     number;
  ID:            number;
  IsExpansion:   boolean;
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
  Url:           string;
  Version:       string;
}
