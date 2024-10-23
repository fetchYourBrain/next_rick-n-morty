export const filters: Record<string, { label: string; value: string; color: string }[]> = {
  '/characters': [
    { label: 'Male', value: 'male', color: 'bg-light-primary hover:bg-blue-600' },
    { label: 'Female', value: 'female', color: 'bg-dark-btn hover:bg-pink-600' },
    { label: 'Alive', value: 'alive', color: 'bg-[#0E9E0B] hover:bg-green-600' },
    { label: 'Dead', value: 'dead', color: 'bg-[#CC2008] hover:bg-red-600' },
    { label: 'Alien', value: 'alien', color: 'bg-purple-500 hover:bg-purple-600' },
    { label: 'Human', value: 'human', color: 'bg-yellow-500 hover:bg-yellow-600' },
    { label: 'Unknown', value: 'unknown', color: 'bg-[#5623A8] hover:bg-gray-600' },
  ],
  '/episodes': [
    { label: '2013', value: '2013', color: 'bg-light-primary hover:bg-blue-600' },
    { label: '2014', value: '2014', color: 'bg-dark-btn hover:bg-pink-600' },
    { label: '2015', value: '2015', color: 'bg-[#0E9E0B] hover:bg-green-600' },
  ],
  '/locations': [
    { label: 'Planet', value: 'Planet', color: 'bg-light-primary hover:bg-blue-600' },
    { label: 'Cluster', value: 'Cluster', color: 'bg-dark-btn hover:bg-pink-600' },
    { label: 'Space station', value: 'Space station', color: 'bg-[#0E9E0B] hover:bg-green-600' },
    { label: 'Microverse', value: 'Microverse', color: 'bg-[#CC2008] hover:bg-green-600' },
    { label: 'TV', value: 'TV', color: 'bg-purple-500 hover:bg-green-600' },
    { label: 'Resort', value: 'Resort', color: 'bg-yellow-500 hover:bg-green-600' },
    { label: 'Fantasy town', value: 'Fantasy town', color: 'bg-[#5623A8] hover:bg-green-600' },
    { label: 'Dream', value: 'Dream', color: 'bg-orange-500 hover:bg-green-600' },
  ],
};
