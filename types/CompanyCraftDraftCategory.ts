export interface CompanyCraftDraftCategoryIndex {
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
  Name: string;
  Url:  string;
}


export interface CompanyCraftDraftCategory {
  CompanyCraftType0:         CompanyCraftType;
  CompanyCraftType0Target:   string;
  CompanyCraftType0TargetID: number;
  CompanyCraftType1:         CompanyCraftType;
  CompanyCraftType1Target:   string;
  CompanyCraftType1TargetID: number;
  CompanyCraftType2:         CompanyCraftType;
  CompanyCraftType2Target:   string;
  CompanyCraftType2TargetID: number;
  CompanyCraftType3:         CompanyCraftType;
  CompanyCraftType3Target:   string;
  CompanyCraftType3TargetID: number;
  CompanyCraftType4:         CompanyCraftType;
  CompanyCraftType4Target:   string;
  CompanyCraftType4TargetID: number;
  CompanyCraftType5:         CompanyCraftType;
  CompanyCraftType5Target:   string;
  CompanyCraftType5TargetID: number;
  CompanyCraftType6:         CompanyCraftType;
  CompanyCraftType6Target:   string;
  CompanyCraftType6TargetID: number;
  CompanyCraftType7:         CompanyCraftType;
  CompanyCraftType7Target:   string;
  CompanyCraftType7TargetID: number;
  CompanyCraftType8:         null;
  CompanyCraftType8Target:   string;
  CompanyCraftType8TargetID: number;
  CompanyCraftType9:         null;
  CompanyCraftType9Target:   string;
  CompanyCraftType9TargetID: number;
  GameContentLinks:          GameContentLinks;
  ID:                        number;
  Name:                      string;
  Name_de:                   string;
  Name_en:                   string;
  Name_fr:                   string;
  Name_ja:                   string;
  Patch:                     null;
  Url:                       string;
}

export interface CompanyCraftType {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}

export interface GameContentLinks {
  CompanyCraftDraft:    CompanyCraft;
  CompanyCraftSequence: CompanyCraft;
}

export interface CompanyCraft {
  CompanyCraftDraftCategory: number[];
}
