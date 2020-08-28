
export namespace TransformationIndexNS {
  export type TransformationIndex = {
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

export type Index = TransformationIndexNS.TransformationIndex;

export namespace TransformationNS {
  export type Transformation = {
    Action0:               null;
    Action0Target:         string;
    Action0TargetID:       number;
    Action1:               null;
    Action1Target:         string;
    Action1TargetID:       number;
    Action2:               null;
    Action2Target:         string;
    Action2TargetID:       number;
    Action3:               null;
    Action3Target:         string;
    Action3TargetID:       number;
    Action4:               null;
    Action4Target:         string;
    Action4TargetID:       number;
    Action5:               null;
    Action5Target:         string;
    Action5TargetID:       number;
    Action6:               null;
    Action6Target:         string;
    Action6TargetID:       number;
    Action7:               null;
    Action7Target:         string;
    Action7TargetID:       number;
    BNpcCustomize:         null;
    BNpcCustomizeTarget:   string;
    BNpcCustomizeTargetID: number;
    BNpcName:              null;
    BNpcNameTarget:        string;
    BNpcNameTargetID:      number;
    EndVFX:                Vfx;
    EndVFXTarget:          string;
    EndVFXTargetID:        number;
    ExHotbarEnableConfig:  number;
    GameContentLinks:      any[];
    ID:                    number;
    IsEvent:               number;
    IsPvP:                 number;
    Model:                 Model;
    ModelTarget:           string;
    ModelTargetID:         number;
    NpcEquip:              null;
    NpcEquipTarget:        string;
    NpcEquipTargetID:      number;
    Patch:                 null;
    PlayerCamera:          number;
    RPParameter:           null;
    RPParameterTarget:     string;
    RPParameterTargetID:   number;
    RemoveAction:          null;
    RemoveActionTarget:    string;
    RemoveActionTargetID:  number;
    Scale:                 number;
    Speed:                 number;
    StartVFX:              Vfx;
    StartVFXTarget:        string;
    StartVFXTargetID:      number;
    Url:                   string;
  }
  
  export type Vfx = {
    ID:          number;
    Location:    string;
    Location_en: string;
  }
  
  export type Model = {
    Base:         number;
    ID:           number;
    Model:        number;
    PapVariation: number;
    SEPack:       number;
    Type:         number;
    Variant:      number;
  }
  
}

export type Transformation = TransformationNS.Transformation;
