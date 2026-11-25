export type Founder = {
  id: string;
  name: string;
  role: string;
};

export const founders: Founder[] = [
  {
    id: 'muhammad-umer-farooq',
    name: 'Muhammad Umer Farooq',
    role: 'Co-Founder',
  },
  {
    id: 'muhammad-burhan-yousaf',
    name: 'Muhammad Burhan Yousaf',
    role: 'Co-Founder',
  },
];

export function founderById(id: string) {
  return founders.find(founder => founder.id === id);
}

export const studioStatement =
  'Uxhan Forge is an independent software, mobile application, and game development studio co-founded by Muhammad Umer Farooq and Muhammad Burhan Yousaf.';
