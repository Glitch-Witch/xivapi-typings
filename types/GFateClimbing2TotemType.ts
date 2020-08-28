
export namespace GFateClimbing2TotemTypeIndexNS {
  export type GFateClimbingTotemTypeIndex = {
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

export type Index = GFateClimbing2TotemTypeIndexNS.GFateClimbingTotemTypeIndex;

export namespace GFateClimbing2TotemTypeNS {
  export type GFateClimbingTotemType = {
    GameContentLinks:              any[];
    ID:                            number;
    Patch:                         null;
    PublicContentTextData:         PublicContentTextData;
    PublicContentTextDataTarget:   string;
    PublicContentTextDataTargetID: number;
    Url:                           string;
  }

  export type PublicContentTextData = {
    ID:          number;
    TextData:    string;
    TextData_de: string;
    TextData_en: string;
    TextData_fr: string;
    TextData_ja: string;
  }

}

export type GFateClimbing2TotemType = GFateClimbing2TotemTypeNS.GFateClimbingTotemType;
