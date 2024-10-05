import { Character } from '@/types/Character';
import Image from 'next/image';

interface CharacterCardProps {
  key?: number;
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const {id, name, status, species, gender, location, image } = character;

  const getStatusColor = (status: string) =>
    status.toLowerCase() === 'dead' ? 'bg-red-600' : 
    status.toLowerCase() === 'alive' ? 'bg-green-600' : 'bg-violet-600';

  const isDeadStatus = status.toLowerCase() === 'dead';

  const getBorderColorClass = (gender: string) =>
    gender.toLowerCase() === 'male' ? 'border-blue-500' : 
    gender.toLowerCase() === 'female' ? 'border-pink-500' : 'border-[#5CEDD6]';

  return (
    <div className="relative flex w-full max-w-[400px] cursor-pointer flex-col rounded-md border-2 border-[#9DCE34] bg-[#031a16] shadow-md shadow-[#9DCE34] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]">
      <div className="absolute top-[-20px] flex h-[40px] w-[40px] self-center bg-[url('/img/portal.png')] bg-contain bg-center bg-no-repeat z-[1]">
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000,_0_-1px_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_1px_0_0_#000]">
          {id}
        </p>
      </div>  

      <div className="flex-grow pb-2">
        <div className="relative group">
            <div className={`h-full w-full rounded-b-md border-b-8 ${getBorderColorClass(gender)}`}>
              <Image 
                src={image} 
                alt={name} 
                width={270} 
                height={270} 
                className={`h-full w-full object-contain object-center shadow-md shadow-black/25 transition-all duration-300 
                  ${isDeadStatus ? 'group-hover:grayscale' : ''}`}
              />
            </div>
            
            <div className={`absolute right-3 top-2 rounded-md px-2 py-1 text-center font-bold text-white transition-opacity duration-300 ${getStatusColor(status)} ${isDeadStatus ? 'group-hover:opacity-0' : ''}`}>
              {status.toUpperCase()}
            </div>

            {isDeadStatus && (
              <div>
                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  DEAD
                </div>
                
                <Image 
                  src="/img/dead.svg" 
                  alt="Dead" 
                  width={200}
                  height={200}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-50"
                />
              </div>             
            )}
        </div>
      
        <div className="flex flex-col gap-1 mb-2 border-b-2 border-dashed border-b-[#90bd2e86] py-2 text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000,_0_-1px_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_1px_0_0_#000]">
          <h4 className="text-left text-xl font-bold px-2">{name}</h4>
          <div className="flex items-center gap-1 px-2">
            <Image 
              src="/img/alien.svg" 
              alt="alien" 
              width={15}
              height={15}
              className="opacity-50"
            />
            <p> {species}</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-[#8fbd2e]">
          <p>Last seen on: </p>
          <p className="text-center">
            {(!location.name || location.name === 'unknown') 
              ? "Somewhere in space" 
              : location.name}
          </p>
        </div>
      </div>
    </div>
  );
};
