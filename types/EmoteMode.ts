
export namespace EmoteModeIndexNS {
  export type EmoteModeIndex = {
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

export type Index = EmoteModeIndexNS.EmoteModeIndex;

export namespace EmoteModeNS {
  export type EmoteMode = {
    Camera:             number;
    ConditionMode:      number;
    EndEmote:           EmoteModeEndEmote;
    EndEmoteTarget:     string;
    EndEmoteTargetID:   number;
    EndOnEmote:         number;
    EndOnRotate:        number;
    GameContentLinks:   GameContentLinks;
    ID:                 number;
    Move:               number;
    Patch:              null;
    StartEmote:         EmoteModeEndEmote;
    StartEmoteTarget:   string;
    StartEmoteTargetID: number;
    Url:                string;
  }
  
  export type EmoteModeEndEmote = {
    ActionTimeline0:              ActionTimeline;
    ActionTimeline0Target:        string;
    ActionTimeline0TargetID:      number;
    ActionTimeline1:              ActionTimeline | null;
    ActionTimeline1Target:        string;
    ActionTimeline1TargetID:      number;
    ActionTimeline2:              ActionTimeline | null;
    ActionTimeline2Target:        string;
    ActionTimeline2TargetID:      number;
    ActionTimeline3:              null;
    ActionTimeline3Target:        string;
    ActionTimeline3TargetID:      number;
    ActionTimeline4:              null;
    ActionTimeline4Target:        string;
    ActionTimeline4TargetID:      number;
    ActionTimeline5:              null;
    ActionTimeline5Target:        string;
    ActionTimeline5TargetID:      number;
    ActionTimeline6:              null;
    ActionTimeline6Target:        string;
    ActionTimeline6TargetID:      number;
    DrawsWeapon:                  number;
    EmoteCategory:                EmoteCategory;
    EmoteCategoryTarget:          string;
    EmoteCategoryTargetID:        number;
    EmoteMode:                    EmoteModeClass;
    EmoteModeTarget:              string;
    EmoteModeTargetID:            number;
    HasCancelEmote:               number;
    ID:                           number;
    Icon:                         string;
    IconID:                       number;
    LogMessageTargeted:           null;
    LogMessageTargetedTarget:     string;
    LogMessageTargetedTargetID:   number;
    LogMessageUntargeted:         null;
    LogMessageUntargetedTarget:   string;
    LogMessageUntargetedTargetID: number;
    Name:                         string;
    Name_de:                      string;
    Name_en:                      string;
    Name_fr:                      string;
    Name_ja:                      string;
    TextCommand:                  TextCommand | null;
    TextCommandTarget:            string;
    TextCommandTargetID:          number;
    UnlockLink:                   number;
  }
  
  export type ActionTimeline = {
    ActionTimelineIDMode:     number;
    ID:                       number;
    IsLoop:                   number;
    IsMotionCanceledByMoving: number;
    Key:                      string;
    Key_en:                   string;
    KillUpper:                number;
    LoadType:                 number;
    LookAtMode:               number;
    Pause:                    number;
    Priority:                 number;
    Resident:                 number;
    ResidentPap:              number;
    Slot:                     number;
    Stance:                   number;
    StartAttach:              number;
    Type:                     number;
    WeaponTimeline:           WeaponTimeline;
    WeaponTimelineTarget:     string;
    WeaponTimelineTargetID:   number;
  }
  
  export type WeaponTimeline = {
    File:               string;
    File_en:            string;
    ID:                 number;
    NextWeaponTimeline: string;
  }
  
  export type EmoteCategory = {
    ID:      number;
    Name:    string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
  }
  
  export type EmoteModeClass = {
    Camera:             number;
    ConditionMode:      number;
    EndEmote:           EmoteModeEndEmoteClass;
    EndEmoteTarget:     string;
    EndEmoteTargetID:   number;
    EndOnEmote:         number;
    EndOnRotate:        number;
    ID:                 number;
    Move:               number;
    StartEmote:         EmoteModeEndEmoteClass;
    StartEmoteTarget:   string;
    StartEmoteTargetID: number;
  }
  
  export type EmoteModeEndEmoteClass = {
    ActionTimeline0:      number;
    ActionTimeline1:      number;
    ActionTimeline2:      number;
    ActionTimeline3:      number;
    ActionTimeline4:      number;
    ActionTimeline5:      number;
    ActionTimeline6:      number;
    DrawsWeapon:          number;
    EmoteCategory:        number;
    EmoteMode:            number;
    HasCancelEmote:       number;
    ID:                   number;
    Icon:                 string;
    IconID:               number;
    LogMessageTargeted:   number;
    LogMessageUntargeted: number;
    Name:                 string;
    Name_de:              string;
    Name_en:              string;
    Name_fr:              string;
    Name_ja:              string;
    TextCommand:          number;
    UnlockLink:           number;
  }
  
  export type TextCommand = {
    Alias:           string;
    Alias_de:        string;
    Alias_en:        string;
    Alias_fr:        string;
    Alias_ja:        string;
    Command:         string;
    Command_de:      string;
    Command_en:      string;
    Command_fr:      string;
    Command_ja:      string;
    Description:     string;
    Description_de:  string;
    Description_en:  string;
    Description_fr:  string;
    Description_ja:  string;
    ID:              number;
    ShortAlias:      string;
    ShortAlias_de:   string;
    ShortAlias_en:   string;
    ShortAlias_fr:   string;
    ShortAlias_ja:   string;
    ShortCommand:    string;
    ShortCommand_de: string;
    ShortCommand_en: string;
    ShortCommand_fr: string;
    ShortCommand_ja: string;
  }
  
  export type GameContentLinks = {
    Emote: Emote;
  }
  
  export type Emote = {
    EmoteMode: number[];
  }
  
}

export type EmoteMode = EmoteModeNS.EmoteMode;
