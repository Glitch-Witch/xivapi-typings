
export namespace ResidentIndexNS {
  export type ResidentIndex = {
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
    ID:   string;
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = ResidentIndexNS.ResidentIndex;

export namespace ResidentNS {
  export type Resident = {
    "AddedIn5-3":               number;
    GameContentLinks:           any[];
    GamePatch:                  GamePatch;
    ID:                         string;
    Model:                      string;
    NpcYell:                    null;
    NpcYellTarget:              string;
    NpcYellTargetID:            number;
    Patch:                      number;
    ResidentMotionType:         null;
    ResidentMotionTypeTarget:   string;
    ResidentMotionTypeTargetID: number;
    Url:                        string;
  }
  
  export type GamePatch = {
    Banner:        null;
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

export type Resident = ResidentNS.Resident;
