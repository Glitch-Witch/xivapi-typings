
export namespace WeatherReportReplaceIndexNS {
  export type WeatherReportReplaceIndex = {
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

export type Index = WeatherReportReplaceIndexNS.WeatherReportReplaceIndex;

export namespace WeatherReportReplaceNS {
  export type WeatherReportReplace = {
    GameContentLinks:        any[];
    ID:                      number;
    Patch:                   null;
    PlaceNameParent:         PlaceName;
    PlaceNameParentTarget:   string;
    PlaceNameParentTargetID: number;
    PlaceNameSub:            PlaceName;
    PlaceNameSubTarget:      string;
    PlaceNameSubTargetID:    number;
    Url:                     string;
  }
  
  export type PlaceName = {
    ID:               number;
    Icon:             string;
    Name:             string;
    NameNoArticle:    string;
    NameNoArticle_de: string;
    NameNoArticle_en: string;
    NameNoArticle_fr: string;
    NameNoArticle_ja: string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
  }
  
}

export type WeatherReportReplace = WeatherReportReplaceNS.WeatherReportReplace;
