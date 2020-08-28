
export namespace EurekaMagiciteItemTypeIndexNS {
  export type EurekaMagiciteItemTypeIndex = {
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

export type Index = EurekaMagiciteItemTypeIndexNS.EurekaMagiciteItemTypeIndex;

export namespace EurekaMagiciteItemTypeNS {
  export type EurekaMagiciteItemType = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    Type:             string;
    Type_de:          string;
    Type_en:          string;
    Type_fr:          string;
    Type_ja:          string;
    Url:              string;
  }
  
  export type GameContentLinks = {
    EurekaMagiciteItem: EurekaMagiciteItem;
  }
  
  export type EurekaMagiciteItem = {
    EurekaMagiciteItemType: number[];
  }
  
  export type GamePatch = {
    Banner:        null;
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

export type EurekaMagiciteItemType = EurekaMagiciteItemTypeNS.EurekaMagiciteItemType;
