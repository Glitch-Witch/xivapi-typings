
export namespace VFXIndexNS {
  export type VFXIndex = {
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

export type Index = VFXIndexNS.VFXIndex;

export namespace VFXNS {
  export type Vfx = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Location:         string;
    Location_en:      string;
    Patch:            number;
    Url:              string;
  }

  export type GameContentLinks = {
    Transformation: Transformation;
  }

  export type Transformation = {
    EndVFX:   number[];
    StartVFX: number[];
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

export type VFX = VFXNS.Vfx;
