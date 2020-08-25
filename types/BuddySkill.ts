export interface BuddySkillIndex {
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


export interface BuddySkill1 {
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
