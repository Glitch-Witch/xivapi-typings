
export namespace ModelCharaIndexNS {
  export type ModelCharaIndex = {
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

export type Index = ModelCharaIndexNS.ModelCharaIndex;

export namespace ModelCharaNS {
  export type ModelChara = {
    Base:             number;
    GameContentLinks: GameContentLinks;
    ID:               number;
    Model:            number;
    PapVariation:     number;
    Patch:            null;
    SEPack:           number;
    Type:             number;
    Url:              string;
    Variant:          number;
  }
  
  export type GameContentLinks = {
    BNpcBase: BNpcBase;
    ENpcBase: BNpcBase;
    Mount:    BNpcBase;
  }
  
  export type BNpcBase = {
    ModelChara: number[];
  }
  
}

export type ModelChara = ModelCharaNS.ModelChara;
