
export namespace FishingRecordTypeIndexNS {
  export type FishingRecordTypeIndex = {
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

export type Index = FishingRecordTypeIndexNS.FishingRecordTypeIndex;

export namespace FishingRecordTypeNS {
  export type FishingRecordType = {
    Addon:              Addon;
    AddonTarget:        string;
    AddonTargetID:      number;
    GameContentLinks:   GameContentLinks;
    ID:                 number;
    Patch:              null;
    RankAAARequirement: number;
    RankAARequirement:  number;
    RankARequirement:   number;
    RankBRequirement:   number;
    Url:                string;
  }
  
  export type Addon = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
  export type GameContentLinks = {
    FishParameter: FishParameter;
  }
  
  export type FishParameter = {
    FishingRecordType: number[];
  }
  
}

export type FishingRecordType = FishingRecordTypeNS.FishingRecordType;
