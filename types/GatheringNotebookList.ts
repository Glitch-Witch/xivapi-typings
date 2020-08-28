
export namespace GatheringNotebookListIndexNS {
  export type GatheringNotebookListIndex = {
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

export type Index = GatheringNotebookListIndexNS.GatheringNotebookListIndex;

export namespace GatheringNotebookListNS {
  export type GatheringNotebookList = {
    GameContentLinks:        any[];
    GamePatch:               GamePatch;
    GatheringItem0:          GatheringItem;
    GatheringItem0Target:    string;
    GatheringItem0TargetID:  number;
    GatheringItem1:          GatheringItem;
    GatheringItem10:         null;
    GatheringItem10Target:   string;
    GatheringItem10TargetID: string;
    GatheringItem11:         null;
    GatheringItem11Target:   string;
    GatheringItem11TargetID: string;
    GatheringItem12:         null;
    GatheringItem12Target:   string;
    GatheringItem12TargetID: string;
    GatheringItem13:         null;
    GatheringItem13Target:   string;
    GatheringItem13TargetID: string;
    GatheringItem14:         null;
    GatheringItem14Target:   string;
    GatheringItem14TargetID: string;
    GatheringItem15:         null;
    GatheringItem15Target:   string;
    GatheringItem15TargetID: string;
    GatheringItem16:         null;
    GatheringItem16Target:   string;
    GatheringItem16TargetID: string;
    GatheringItem17:         null;
    GatheringItem17Target:   string;
    GatheringItem17TargetID: string;
    GatheringItem18:         null;
    GatheringItem18Target:   string;
    GatheringItem18TargetID: string;
    GatheringItem19:         null;
    GatheringItem19Target:   string;
    GatheringItem19TargetID: string;
    GatheringItem1Target:    string;
    GatheringItem1TargetID:  number;
    GatheringItem2:          GatheringItem;
    GatheringItem20:         null;
    GatheringItem20Target:   string;
    GatheringItem20TargetID: string;
    GatheringItem21:         null;
    GatheringItem21Target:   string;
    GatheringItem21TargetID: string;
    GatheringItem22:         null;
    GatheringItem22Target:   string;
    GatheringItem22TargetID: string;
    GatheringItem23:         null;
    GatheringItem23Target:   string;
    GatheringItem23TargetID: string;
    GatheringItem24:         null;
    GatheringItem24Target:   string;
    GatheringItem24TargetID: string;
    GatheringItem25:         null;
    GatheringItem25Target:   string;
    GatheringItem25TargetID: string;
    GatheringItem26:         null;
    GatheringItem26Target:   string;
    GatheringItem26TargetID: string;
    GatheringItem27:         null;
    GatheringItem27Target:   string;
    GatheringItem27TargetID: string;
    GatheringItem28:         null;
    GatheringItem28Target:   string;
    GatheringItem28TargetID: string;
    GatheringItem29:         null;
    GatheringItem29Target:   string;
    GatheringItem29TargetID: string;
    GatheringItem2Target:    string;
    GatheringItem2TargetID:  number;
    GatheringItem3:          GatheringItem;
    GatheringItem30:         null;
    GatheringItem30Target:   string;
    GatheringItem30TargetID: string;
    GatheringItem31:         null;
    GatheringItem31Target:   string;
    GatheringItem31TargetID: string;
    GatheringItem32:         null;
    GatheringItem32Target:   string;
    GatheringItem32TargetID: string;
    GatheringItem33:         null;
    GatheringItem33Target:   string;
    GatheringItem33TargetID: string;
    GatheringItem34:         null;
    GatheringItem34Target:   string;
    GatheringItem34TargetID: string;
    GatheringItem35:         null;
    GatheringItem35Target:   string;
    GatheringItem35TargetID: string;
    GatheringItem36:         null;
    GatheringItem36Target:   string;
    GatheringItem36TargetID: string;
    GatheringItem37:         null;
    GatheringItem37Target:   string;
    GatheringItem37TargetID: string;
    GatheringItem38:         null;
    GatheringItem38Target:   string;
    GatheringItem38TargetID: string;
    GatheringItem39:         null;
    GatheringItem39Target:   string;
    GatheringItem39TargetID: string;
    GatheringItem3Target:    string;
    GatheringItem3TargetID:  number;
    GatheringItem4:          GatheringItem;
    GatheringItem40:         null;
    GatheringItem40Target:   string;
    GatheringItem40TargetID: string;
    GatheringItem41:         null;
    GatheringItem41Target:   string;
    GatheringItem41TargetID: string;
    GatheringItem42:         null;
    GatheringItem42Target:   string;
    GatheringItem42TargetID: string;
    GatheringItem43:         null;
    GatheringItem43Target:   string;
    GatheringItem43TargetID: string;
    GatheringItem44:         null;
    GatheringItem44Target:   string;
    GatheringItem44TargetID: string;
    GatheringItem45:         null;
    GatheringItem45Target:   string;
    GatheringItem45TargetID: string;
    GatheringItem46:         null;
    GatheringItem46Target:   string;
    GatheringItem46TargetID: string;
    GatheringItem47:         null;
    GatheringItem47Target:   string;
    GatheringItem47TargetID: string;
    GatheringItem48:         null;
    GatheringItem48Target:   string;
    GatheringItem48TargetID: string;
    GatheringItem49:         null;
    GatheringItem49Target:   string;
    GatheringItem49TargetID: string;
    GatheringItem4Target:    string;
    GatheringItem4TargetID:  number;
    GatheringItem5:          GatheringItem;
    GatheringItem50:         null;
    GatheringItem50Target:   string;
    GatheringItem50TargetID: string;
    GatheringItem51:         null;
    GatheringItem51Target:   string;
    GatheringItem51TargetID: string;
    GatheringItem52:         null;
    GatheringItem52Target:   string;
    GatheringItem52TargetID: string;
    GatheringItem53:         null;
    GatheringItem53Target:   string;
    GatheringItem53TargetID: string;
    GatheringItem54:         null;
    GatheringItem54Target:   string;
    GatheringItem54TargetID: string;
    GatheringItem55:         null;
    GatheringItem55Target:   string;
    GatheringItem55TargetID: string;
    GatheringItem56:         null;
    GatheringItem56Target:   string;
    GatheringItem56TargetID: string;
    GatheringItem57:         null;
    GatheringItem57Target:   string;
    GatheringItem57TargetID: string;
    GatheringItem58:         null;
    GatheringItem58Target:   string;
    GatheringItem58TargetID: string;
    GatheringItem59:         null;
    GatheringItem59Target:   string;
    GatheringItem59TargetID: string;
    GatheringItem5Target:    string;
    GatheringItem5TargetID:  number;
    GatheringItem6:          GatheringItem;
    GatheringItem60:         null;
    GatheringItem60Target:   string;
    GatheringItem60TargetID: string;
    GatheringItem61:         null;
    GatheringItem61Target:   string;
    GatheringItem61TargetID: string;
    GatheringItem62:         null;
    GatheringItem62Target:   string;
    GatheringItem62TargetID: string;
    GatheringItem63:         null;
    GatheringItem63Target:   string;
    GatheringItem63TargetID: string;
    GatheringItem64:         null;
    GatheringItem64Target:   string;
    GatheringItem64TargetID: string;
    GatheringItem65:         null;
    GatheringItem65Target:   string;
    GatheringItem65TargetID: string;
    GatheringItem66:         null;
    GatheringItem66Target:   string;
    GatheringItem66TargetID: string;
    GatheringItem67:         null;
    GatheringItem67Target:   string;
    GatheringItem67TargetID: string;
    GatheringItem68:         null;
    GatheringItem68Target:   string;
    GatheringItem68TargetID: string;
    GatheringItem69:         null;
    GatheringItem69Target:   string;
    GatheringItem69TargetID: string;
    GatheringItem6Target:    string;
    GatheringItem6TargetID:  number;
    GatheringItem7:          null;
    GatheringItem70:         null;
    GatheringItem70Target:   string;
    GatheringItem70TargetID: string;
    GatheringItem71:         null;
    GatheringItem71Target:   string;
    GatheringItem71TargetID: string;
    GatheringItem72:         null;
    GatheringItem72Target:   string;
    GatheringItem72TargetID: string;
    GatheringItem73:         null;
    GatheringItem73Target:   string;
    GatheringItem73TargetID: string;
    GatheringItem74:         null;
    GatheringItem74Target:   string;
    GatheringItem74TargetID: string;
    GatheringItem75:         null;
    GatheringItem75Target:   string;
    GatheringItem75TargetID: string;
    GatheringItem76:         null;
    GatheringItem76Target:   string;
    GatheringItem76TargetID: string;
    GatheringItem77:         null;
    GatheringItem77Target:   string;
    GatheringItem77TargetID: string;
    GatheringItem78:         null;
    GatheringItem78Target:   string;
    GatheringItem78TargetID: string;
    GatheringItem79:         null;
    GatheringItem79Target:   string;
    GatheringItem79TargetID: string;
    GatheringItem7Target:    string;
    GatheringItem7TargetID:  string;
    GatheringItem8:          null;
    GatheringItem80:         null;
    GatheringItem80Target:   string;
    GatheringItem80TargetID: string;
    GatheringItem81:         null;
    GatheringItem81Target:   string;
    GatheringItem81TargetID: string;
    GatheringItem82:         null;
    GatheringItem82Target:   string;
    GatheringItem82TargetID: string;
    GatheringItem83:         null;
    GatheringItem83Target:   string;
    GatheringItem83TargetID: string;
    GatheringItem84:         null;
    GatheringItem84Target:   string;
    GatheringItem84TargetID: string;
    GatheringItem85:         null;
    GatheringItem85Target:   string;
    GatheringItem85TargetID: string;
    GatheringItem86:         null;
    GatheringItem86Target:   string;
    GatheringItem86TargetID: string;
    GatheringItem87:         null;
    GatheringItem87Target:   string;
    GatheringItem87TargetID: string;
    GatheringItem88:         null;
    GatheringItem88Target:   string;
    GatheringItem88TargetID: string;
    GatheringItem89:         null;
    GatheringItem89Target:   string;
    GatheringItem89TargetID: string;
    GatheringItem8Target:    string;
    GatheringItem8TargetID:  string;
    GatheringItem9:          null;
    GatheringItem90:         null;
    GatheringItem90Target:   string;
    GatheringItem90TargetID: string;
    GatheringItem91:         null;
    GatheringItem91Target:   string;
    GatheringItem91TargetID: string;
    GatheringItem92:         null;
    GatheringItem92Target:   string;
    GatheringItem92TargetID: string;
    GatheringItem93:         null;
    GatheringItem93Target:   string;
    GatheringItem93TargetID: string;
    GatheringItem94:         null;
    GatheringItem94Target:   string;
    GatheringItem94TargetID: string;
    GatheringItem95:         null;
    GatheringItem95Target:   string;
    GatheringItem95TargetID: string;
    GatheringItem96:         null;
    GatheringItem96Target:   string;
    GatheringItem96TargetID: string;
    GatheringItem97:         null;
    GatheringItem97Target:   string;
    GatheringItem97TargetID: string;
    GatheringItem98:         null;
    GatheringItem98Target:   string;
    GatheringItem98TargetID: string;
    GatheringItem99:         null;
    GatheringItem99Target:   string;
    GatheringItem99TargetID: string;
    GatheringItem9Target:    string;
    GatheringItem9TargetID:  string;
    ID:                      number;
    Patch:                   number;
    Url:                     string;
  }
  
  export type GamePatch = {
    Banner:      string;
    ExName:      string;
    ExVersion:   number;
    ID:          number;
    Name:        string;
    Name_cn:     string;
    Name_de:     string;
    Name_en:     string;
    Name_fr:     string;
    Name_ja:     string;
    Name_kr:     string;
    ReleaseDate: number;
    Version:     string;
  }
  
  export type GatheringItem = {
    GatheringItemLevel:         GatheringItemLevel;
    GatheringItemLevelTarget:   string;
    GatheringItemLevelTargetID: number;
    ID:                         number;
    IsHidden:                   number;
    Item:                       number;
  }
  
  export type GatheringItemLevel = {
    GatheringItemLevel: number;
    ID:                 number;
    Stars:              number;
  }
  
}

export type GatheringNotebookList = GatheringNotebookListNS.GatheringNotebookList;