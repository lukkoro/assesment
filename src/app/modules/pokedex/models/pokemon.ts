export interface IPokemon {
  name?: string;
  id?: number;
  picture?: string;
  abilities?: [{
    ability?: {
      name?: string,
      description?: string,
      url?: string
    },
    is_hidden?: boolean,
    slot?: number
  }];
  types?: [
    {
      slot: number,
      type: {
        name: string,
        url: string
      }
    }
  ];
  order?: number;
  stats?: [{
    base_stat: number,
    effort: number,
    stat: {
      name: string
      url: string
    }
  }];
}
