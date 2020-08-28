
export namespace ActivityFeedButtonsIndexNS {
  export type ActivityFeedButtonsIndex = {
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

export type Index = ActivityFeedButtonsIndexNS.ActivityFeedButtonsIndex;

export namespace ActivityFeedButtonsNS {
  export type ActivityFeedButtons = {
    BannerURL:        string;
    BannerURL_en:     string;
    Description:      string;
    Description_en:   string;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Language:         string;
    Language_en:      string;
    Patch:            number;
    PictureURL:       string;
    PictureURL_en:    string;
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

export type ActivityFeedButtons = ActivityFeedButtonsNS.ActivityFeedButtons;
