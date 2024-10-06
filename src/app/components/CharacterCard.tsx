import { Character } from '@/types/Character';
import Image from 'next/image';

interface CharacterCardProps {
  key?: number;
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const {id, name, status, species, gender, location, image } = character;

  const statusLower = status.toLowerCase();
  const genderLower = gender.toLowerCase();
  const isDeadStatus = statusLower === 'dead';

  const getStatusColor = () =>
    statusLower === 'dead' ? 'bg-[#CC2008]' : 
    statusLower === 'alive' ? 'bg-[#0E9E0B]' : 'bg-[#5623A8]';

  const getBorderColorClass = () =>
    genderLower === 'male' ? 'border-[#2A6AD5]' : 
    genderLower === 'female' ? 'border-[#F90095]' : 'border-[#5CEDD6]';

  return (
    <article className="relative flex w-full flex-col bg-[#363A3A] border-[#9DCE34] cursor-pointer transition-all duration-300 hover:scale-105 hover:border-[#39FF14] hover:border-[1px] hover:shadow-[0_0_25px_5px_rgba(57,255,20,0.7)]">
      <div className="absolute top-[-20px] z-[1] flex h-[40px] w-[40px] self-center bg-[url('/img/portal.png')] bg-contain bg-center bg-no-repeat">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000,_0_-1px_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_1px_0_0_#000]">
          {id}
        </span>
      </div>  

      <div className="flex-grow py-[28px] px-[20px]">
        <div className="relative group mb-[25px] overflow-hidden">
            <div className="h-full w-full">
              <Image 
                src={image} 
                alt={name} 
                width={270} 
                height={270} 
                className={`h-full w-full object-contain object-center transition-all duration-300 ${isDeadStatus ? 'group-hover:grayscale' : ''}`}
              />
            </div>
            
            <div className={`absolute right-3 top-2 px-2 py-1 text-center font-bold text-white transition-opacity duration-300 ${getStatusColor()} ${isDeadStatus && 'group-hover:opacity-0'}`}>
              {status.toUpperCase()}
            </div>

            <div className="absolute bottom-3 right-0 transition-transform duration-300 group-hover:translate-x-full">
              <div className={`inline-block bg-[#363A3A] border-b-8 ${getBorderColorClass()}`}>
                <div className="flex flex-col gap-1 p-2 text-white">
                  <h3 className="text-right text-base font-bold whitespace-nowrap">{name}</h3>
                  <div className="flex items-center justify-end gap-1">
                    <Image 
                      src="/img/alien.svg" 
                      alt="alien" 
                      width={15}
                      height={15}
                    />
                    <p>{species}</p>
                  </div>
                </div>
              </div>
            </div>

            {isDeadStatus && (
              <div>
                <div className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
      
        <div className="flex flex-col items-start w-full p-2 text-white bg-[#4B5050] border border-dashed border-[#0E9E0B]">
          <p className="self-start">Last seen on: </p>
          <p className="self-start">
            {(!location.name || location.name === 'unknown') 
              ? "Somewhere in space" 
              : location.name}
          </p>
        </div>
      </div>
    </article>
  );
};