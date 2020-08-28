
export namespace BNpcPartsIndexNS {
  export type BNpcPartsIndex = {
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

export type Index = BNpcPartsIndexNS.BNpcPartsIndex;

export namespace BNpcPartsNS {
  export type BNpcParts = {
    BNpcBase1:         BNpcBase1;
    BNpcBase1Target:   string;
    BNpcBase1TargetID: number;
    BNpcBase2:         null;
    BNpcBase2Target:   string;
    BNpcBase2TargetID: number;
    BNpcBase3:         null;
    BNpcBase3Target:   string;
    BNpcBase3TargetID: number;
    BNpcBase4:         null;
    BNpcBase4Target:   string;
    BNpcBase4TargetID: number;
    BNpcBase5:         null;
    BNpcBase5Target:   string;
    BNpcBase5TargetID: number;
    GameContentLinks:  GameContentLinks;
    ID:                number;
    PartSlot1:         number;
    PartSlot2:         number;
    PartSlot3:         number;
    PartSlot4:         number;
    PartSlot5:         number;
    Patch:             null;
    Scale1:            string;
    Scale2:            number;
    Scale3:            number;
    Scale4:            number;
    Scale5:            number;
    Url:               string;
    X1:                number;
    X2:                number;
    X3:                number;
    X4:                number;
    X5:                number;
    Y1:                string;
    Y2:                number;
    Y3:                number;
    Y4:                number;
    Y5:                number;
    Z1:                string;
    Z2:                number;
    Z3:                number;
    Z4:                number;
    Z5:                number;
  }
  
  export type BNpcBase1 = {
    ArrayEventHandler:         null;
    ArrayEventHandlerTarget:   string;
    ArrayEventHandlerTargetID: number;
    BNpcCustomize:             null;
    BNpcCustomizeTarget:       string;
    BNpcCustomizeTargetID:     number;
    BNpcParts:                 null;
    BNpcPartsTarget:           string;
    BNpcPartsTargetID:         number;
    Battalion:                 Battalion;
    BattalionTarget:           string;
    BattalionTargetID:         number;
    Behavior:                  null;
    BehaviorTarget:            string;
    BehaviorTargetID:          number;
    ID:                        number;
    IsDisplayLevel:            number;
    IsTargetLine:              number;
    LinkRace:                  null;
    LinkRaceTarget:            string;
    LinkRaceTargetID:          number;
    ModelChara:                ModelChara;
    ModelCharaTarget:          string;
    ModelCharaTargetID:        number;
    NpcEquip:                  null;
    NpcEquipTarget:            string;
    NpcEquipTargetID:          number;
    Rank:                      number;
    SEPack:                    number;
    Scale:                     number;
    Special:                   number;
  }
  
  export type Battalion = {
    ID: number;
  }
  
  export type ModelChara = {
    Base:         number;
    ID:           number;
    Model:        number;
    PapVariation: number;
    SEPack:       number;
    Type:         number;
    Variant:      number;
  }
  
  export type GameContentLinks = {
    BNpcBase: BNpcBase;
  }
  
  export type BNpcBase = {
    BNpcParts: number[];
  }
  
}

export type BNpcParts = BNpcPartsNS.BNpcParts;
