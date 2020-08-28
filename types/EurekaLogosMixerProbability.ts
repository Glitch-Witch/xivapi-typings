
export namespace EurekaLogosMixerProbabilityIndexNS {
  export type EurekaLogosMixerProbabilityIndex = {
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

export type Index = EurekaLogosMixerProbabilityIndexNS.EurekaLogosMixerProbabilityIndex;

export namespace EurekaLogosMixerProbabilityNS {
  export type EurekaLogosMixerProbability = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    "Probability%":   number;
    Url:              string;
  }
  
}

export type EurekaLogosMixerProbability = EurekaLogosMixerProbabilityNS.EurekaLogosMixerProbability;
