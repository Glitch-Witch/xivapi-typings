
export namespace MountTransientIndexNS {
  export type MountTransientIndex = {
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

export type Index = MountTransientIndexNS.MountTransientIndex;

export namespace MountTransientNS {
  export type MountTransient = {
    Description:            string;
    DescriptionEnhanced:    string;
    DescriptionEnhanced_de: string;
    DescriptionEnhanced_en: string;
    DescriptionEnhanced_fr: string;
    DescriptionEnhanced_ja: string;
    Description_de:         string;
    Description_en:         string;
    Description_fr:         string;
    Description_ja:         string;
    GameContentLinks:       any[];
    GamePatch:              GamePatch;
    ID:                     number;
    Patch:                  number;
    Tooltip:                string;
    Tooltip_de:             string;
    Tooltip_en:             string;
    Tooltip_fr:             string;
    Tooltip_ja:             string;
    Url:                    string;
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

export type MountTransient = MountTransientNS.MountTransient;
