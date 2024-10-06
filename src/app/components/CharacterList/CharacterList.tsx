import CharacterClientList from './CharacterClient';

export const CharacterList = async () => {
  const data = await fetch('https://rickandmortyapi.com/api/character');
  const response = await data.json();
  const characters = response.results;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center lg:grid-cols-3 gap-8">
     <CharacterClientList characters={characters}/>
    </div>
  );
};
