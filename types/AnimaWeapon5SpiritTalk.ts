
export namespace AnimaWeapon5SpiritTalkIndexNS {
  export type AnimaWeaponSpiritTalkIndex = {
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
    ID:   string;
    Icon: null;
    Name: null;
    Url:  string;
  }

}

export type Index = AnimaWeapon5SpiritTalkIndexNS.AnimaWeaponSpiritTalkIndex;

export namespace AnimaWeapon5SpiritTalkNS {
  export type AnimaWeaponSpiritTalk = {
    Dialogue:         Dialogue;
    DialogueTarget:   string;
    DialogueTargetID: number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               string;
    Patch:            number;
    Url:              string;
  }

  export type Dialogue = {
    Epilogue:    string;
    Epilogue_de: string;
    Epilogue_en: string;
    Epilogue_fr: string;
    Epilogue_ja: string;
    ID:          number;
    Prologue:    string;
    Prologue_de: string;
    Prologue_en: string;
    Prologue_fr: string;
    Prologue_ja: string;
  }

  export type GamePatch = {
    Banner:        null;
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

export type AnimaWeapon5SpiritTalk = AnimaWeapon5SpiritTalkNS.AnimaWeaponSpiritTalk;
