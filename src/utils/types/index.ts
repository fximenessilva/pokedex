interface Pokemons {
  name: string;
  url: string;
}

interface Pokemon {
  abilities: Array<{
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }>;
  base_experience: number;
  forms: Array<{ name: string; url: string }>;
  game_indices: Array<{
    game_index: number;
    version: { name: string; url: string };
  }>;
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<{
    move: { name: string; url: string };
    version_group_details: Array<{
      level_learned_at: number;
      version_group: { name: string; url: string };
      move_learn_method: { name: string; url: string };
    }>;
  }>;
  name: string;
  order: number;
  past_types: any[];
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
  };
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }>;
  types: Array<{ slot: number; type: { name: string; url: string } }>;
  weight: number;
}

type ComponentWithDarkMode = {
  $isDarkMode?: boolean;
};

export { Pokemons, Pokemon, ComponentWithDarkMode };
