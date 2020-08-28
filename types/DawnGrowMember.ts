
export namespace DawnGrowMemberIndexNS {
  export type DawnGrowMemberIndex = {
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

export type Index = DawnGrowMemberIndexNS.DawnGrowMemberIndex;

export namespace DawnGrowMemberNS {
  export type DawnGrowMember = {
    BigImageNew:      string;
    BigImageNewID:    number;
    BigImageOld:      string;
    BigImageOldID:    number;
    Class:            Class;
    ClassTarget:      string;
    ClassTargetID:    number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    ImageName:        string;
    ImageNameID:      number;
    Member:           Member;
    MemberTarget:     string;
    MemberTargetID:   number;
    Patch:            number;
    SmallImageNew:    string;
    SmallImageNewID:  number;
    SmallImageOld:    string;
    SmallImageOldID:  number;
    Url:              string;
  }
  
  export type Class = {
    ClassPlural:      string;
    ClassPlural_de:   string;
    ClassPlural_en:   string;
    ClassPlural_fr:   string;
    ClassPlural_ja:   string;
    ClassSingular:    string;
    ClassSingular_de: string;
    ClassSingular_en: string;
    ClassSingular_fr: string;
    ClassSingular_ja: string;
    ID:               number;
    VoiceLine:        number;
  }
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    IsExpansion:   boolean;
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
    Url:           string;
    Version:       string;
  }
  
  export type Member = {
    Adjective:         number;
    Article:           number;
    ID:                number;
    Icon:              string;
    Map:               number;
    Name:              string;
    Name_de:           string;
    Name_en:           string;
    Name_fr:           string;
    Name_ja:           string;
    Plural:            string;
    Plural_de:         string;
    Plural_en:         string;
    Plural_fr:         string;
    Plural_ja:         string;
    PossessivePronoun: number;
    Pronoun:           number;
    StartsWithVowel:   number;
    Title:             string;
    Title_de:          string;
    Title_en:          string;
    Title_fr:          string;
    Title_ja:          string;
  }
  
}

export type DawnGrowMember = DawnGrowMemberNS.DawnGrowMember;
