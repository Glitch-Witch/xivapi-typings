
export namespace PvPSelectTraitIndexNS {
  export type PVPSelectTraitIndex = {
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

export type Index = PvPSelectTraitIndexNS.PVPSelectTraitIndex;

export namespace PvPSelectTraitNS {
  export type PVPSelectTrait = {
    Effect:           string;
    Effect_de:        string;
    Effect_en:        string;
    Effect_fr:        string;
    Effect_ja:        string;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Icon:             string;
    IconID:           number;
    Patch:            number;
    Url:              string;
    Value:            number;
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

export type PvPSelectTrait = PvPSelectTraitNS.PVPSelectTrait;
