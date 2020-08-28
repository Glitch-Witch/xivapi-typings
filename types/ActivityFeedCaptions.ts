
export namespace ActivityFeedCaptionsIndexNS {
  export type ActivityFeedCaptionsIndex = {
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

export type Index = ActivityFeedCaptionsIndexNS.ActivityFeedCaptionsIndex;

export namespace ActivityFeedCaptionsNS {
  export type ActivityFeedCaptions = {
    DE:               string;
    DE_en:            string;
    EN:               string;
    EN_en:            string;
    FR:               string;
    FR_en:            string;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    JA:               string;
    JA_en:            string;
    Patch:            number;
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

export type ActivityFeedCaptions = ActivityFeedCaptionsNS.ActivityFeedCaptions;
