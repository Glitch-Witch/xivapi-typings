
export namespace HousingAppealIndexNS {
  export type HousingAppealIndex = {
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

export type Index = HousingAppealIndexNS.HousingAppealIndex;

export namespace HousingAppealNS {
  export type HousingAppeal = {
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Icon:             string;
    IconID:           number;
    Order:            number;
    Patch:            number;
    Tag:              string;
    Tag_de:           string;
    Tag_en:           string;
    Tag_fr:           string;
    Tag_ja:           string;
    Url:              string;
  }
  
  export type GamePatch = {
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
  
}

export type HousingAppeal = HousingAppealNS.HousingAppeal;
