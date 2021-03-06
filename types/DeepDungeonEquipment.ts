
export namespace DeepDungeonEquipmentIndexNS {
  export type DeepDungeonEquipmentIndex = {
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
    Icon: string;
    Name: string;
    Url:  string;
  }
  
}

export type Index = DeepDungeonEquipmentIndexNS.DeepDungeonEquipmentIndex;

export namespace DeepDungeonEquipmentNS {
  export type DeepDungeonEquipment = {
    Adjective:         number;
    Article:           number;
    Description:       string;
    Description_de:    string;
    Description_en:    string;
    Description_fr:    string;
    Description_ja:    string;
    GameContentLinks:  GameContentLinks;
    GamePatch:         GamePatch;
    ID:                number;
    Icon:              string;
    IconID:            number;
    Name:              string;
    Name_de:           string;
    Name_en:           string;
    Name_fr:           string;
    Name_ja:           string;
    Patch:             number;
    Plural:            string;
    Plural_de:         string;
    Plural_en:         string;
    Plural_fr:         string;
    Plural_ja:         string;
    PossessivePronoun: number;
    Pronoun:           number;
    Singular:          string;
    Singular_de:       string;
    Singular_en:       string;
    Singular_fr:       string;
    Singular_ja:       string;
    StartsWithVowel:   number;
    Url:               string;
  }
  
  export type GameContentLinks = {
    DeepDungeon: DeepDungeon;
  }
  
  export type DeepDungeon = {
    AetherpoolArm: number[];
  }
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
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
    Version:       string;
  }
  
}

export type DeepDungeonEquipment = DeepDungeonEquipmentNS.DeepDungeonEquipment;
