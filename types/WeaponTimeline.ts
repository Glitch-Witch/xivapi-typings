
export namespace WeaponTimelineIndexNS {
  export type WeaponTimelineIndex = {
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

export type Index = WeaponTimelineIndexNS.WeaponTimelineIndex;

export namespace WeaponTimelineNS {
  export type WeaponTimeline = {
    File:               string;
    File_en:            string;
    GameContentLinks:   GameContentLinks;
    GamePatch:          GamePatch;
    ID:                 number;
    NextWeaponTimeline: string;
    Patch:              number;
    Url:                string;
  }
  
  export type GameContentLinks = {
    ActionTimeline: ActionTimeline;
  }
  
  export type ActionTimeline = {
    WeaponTimeline: number[];
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

export type WeaponTimeline = WeaponTimelineNS.WeaponTimeline;
