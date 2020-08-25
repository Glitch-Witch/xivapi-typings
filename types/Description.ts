export interface DescriptionIndex {
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
  Name: null;
  Url:  string;
}


export interface Description3604480 {
  GameContentLinks:  any[];
  ID:                number;
  Patch:             null;
  Quest:             null;
  QuestTarget:       string;
  QuestTargetID:     number;
  Section:           null;
  SectionTarget:     string;
  SectionTargetID:   number;
  TextCommentary:    string;
  TextCommentary_de: string;
  TextCommentary_en: string;
  TextCommentary_fr: string;
  TextCommentary_ja: string;
  TextLong:          string;
  TextLong_de:       string;
  TextLong_en:       string;
  TextLong_fr:       string;
  TextLong_ja:       string;
  TextShort:         string;
  TextShort_de:      string;
  TextShort_en:      string;
  TextShort_fr:      string;
  TextShort_ja:      string;
  Url:               string;
}
