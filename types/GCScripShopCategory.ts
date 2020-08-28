
export namespace GCScripShopCategoryIndexNS {
  export type GCScripShopCategoryIndex = {
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

export type Index = GCScripShopCategoryIndexNS.GCScripShopCategoryIndex;

export namespace GCScripShopCategoryNS {
  export type GCScripShopCategory = {
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
  
  export type GrandCompany = {
    ID:      number;
    Name:    string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
  }
  
}

export type GCScripShopCategory = GCScripShopCategoryNS.GCScripShopCategory;
