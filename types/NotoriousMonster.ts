
export namespace NotoriousMonsterIndexNS {
  export type NotoriousMonsterIndex = {
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

export type Index = NotoriousMonsterIndexNS.NotoriousMonsterIndex;

export namespace NotoriousMonsterNS {
  export type NotoriousMonster = {
    BNpcBase:         BNpcBase;
    BNpcBaseTarget:   string;
    BNpcBaseTargetID: number;
    BNpcName:         BNpcName;
    BNpcNameTarget:   string;
    BNpcNameTargetID: number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Rank:             number;
    Url:              string;
  }
  
  export type BNpcBase = {
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
  
  export type BNpcName = {
    Adjective:         number;
    Article:           number;
    ID:                number;
    Icon:              string;
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
  }
  
}

export type NotoriousMonster = NotoriousMonsterNS.NotoriousMonster;
