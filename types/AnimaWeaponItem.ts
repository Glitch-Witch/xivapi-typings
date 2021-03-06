
export namespace AnimaWeaponItemIndexNS {
  export type AnimaWeaponItemIndex = {
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

export type Index = AnimaWeaponItemIndexNS.AnimaWeaponItemIndex;

export namespace AnimaWeaponItemNS {
  /**
   * TODO
   * This type is problematic and has to be generated by hand.
   */
}

// export type AnimaWeaponItem = AnimaWeaponItemNS.AnimaWeaponItem;
