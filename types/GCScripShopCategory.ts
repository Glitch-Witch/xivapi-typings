export interface GCScripShopCategoryIndex {
  Pagination: Pagination;
  Results:    Result[];
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface Result {
  ID:   number;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface GCScripShopCategory1 {
  GameContentLinks:     any[];
  GrandCompany:         GrandCompany;
  GrandCompanyTarget:   string;
  GrandCompanyTargetID: number;
  ID:                   number;
  Patch:                null;
  SubCategory:          number;
  Tier:                 number;
  Url:                  string;
}

export interface GrandCompany {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}
