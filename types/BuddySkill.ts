
export namespace BuddySkillIndexNS {
  export type BuddySkillIndex = {
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

export type Index = BuddySkillIndexNS.BuddySkillIndex;

export namespace BuddySkillNS {
  export type BuddySkill = {
    Attacker:         number;
    BuddyLevel:       number;
    Defender:         number;
    GameContentLinks: any[];
    Healer:           number;
    ID:               number;
    IsActive:         number;
    Patch:            null;
    Url:              string;
  }
  
}

export type BuddySkill = BuddySkillNS.BuddySkill;
