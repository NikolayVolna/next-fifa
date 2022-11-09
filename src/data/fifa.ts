import getUnicodeFlagIcon from 'country-flag-icons/unicode';

export type Team = {
  name: string;
  flag: string;
  order: number;
  group: string;
};

export type Group = {
  name: string;
  teams: Team[];
};

export const fifa: Team[] = [
  { group: 'A', order: 1, name: 'Qatar', flag: getUnicodeFlagIcon('qa') },
  { group: 'A', order: 2, name: 'Ecvador', flag: getUnicodeFlagIcon('ec') },
  { group: 'A', order: 3, name: 'Sinegal', flag: getUnicodeFlagIcon('sn') },
  {
    group: 'A',
    order: 4,
    name: 'Niderlands',
    flag: getUnicodeFlagIcon('nl'),
  },
  { group: 'B', order: 1, name: 'England', flag: getUnicodeFlagIcon('gb-eng') },
  { group: 'B', order: 2, name: 'Iran', flag: getUnicodeFlagIcon('ir') },
  { group: 'B', order: 3, name: 'USA', flag: getUnicodeFlagIcon('usa') },
  { group: 'B', order: 4, name: 'Wales', flag: getUnicodeFlagIcon('gb-wls') },
  {
    group: 'C',
    order: 1,
    name: 'Argentina',
    flag: getUnicodeFlagIcon('arg'),
  },
  {
    group: 'C',
    order: 2,
    name: 'Saudi Arabia',
    flag: getUnicodeFlagIcon('sa'),
  },
  { group: 'C', order: 3, name: 'Mexico', flag: getUnicodeFlagIcon('mx') },
  { group: 'C', order: 4, name: 'Poland', flag: getUnicodeFlagIcon('pl') },
  { group: 'D', order: 1, name: 'France', flag: getUnicodeFlagIcon('fr') },
  { group: 'D', order: 2, name: 'Australia', flag: getUnicodeFlagIcon('au') },
  { group: 'D', order: 3, name: 'Denmark', flag: getUnicodeFlagIcon('dk') },
  { group: 'D', order: 4, name: 'Tunisia', flag: getUnicodeFlagIcon('tn') },
  { group: 'E', order: 1, name: 'Spain', flag: getUnicodeFlagIcon('es') },
  {
    group: 'E',
    order: 2,
    name: 'Costa Rica',
    flag: getUnicodeFlagIcon('cr'),
  },
  { group: 'E', order: 3, name: 'Germany', flag: getUnicodeFlagIcon('de') },
  { group: 'E', order: 4, name: 'Japan', flag: getUnicodeFlagIcon('jp') },
  { group: 'F', order: 1, name: 'Belgium', flag: getUnicodeFlagIcon('be') },
  { group: 'F', order: 2, name: 'Canada', flag: getUnicodeFlagIcon('ca') },
  { group: 'F', order: 3, name: 'Marocco', flag: getUnicodeFlagIcon('ma') },
  { group: 'F', order: 4, name: 'Croatia', flag: getUnicodeFlagIcon('hr') },
  { group: 'G', order: 1, name: 'Brazil', flag: getUnicodeFlagIcon('br') },
  { group: 'G', order: 2, name: 'Serbia', flag: getUnicodeFlagIcon('rs') },
  {
    group: 'G',
    order: 3,
    name: 'Switzerland',
    flag: getUnicodeFlagIcon('ch'),
  },
  { group: 'G', order: 4, name: 'Camerroon', flag: getUnicodeFlagIcon('cm') },
  { group: 'H', order: 1, name: 'Portugal', flag: getUnicodeFlagIcon('pt') },
  { group: 'H', order: 2, name: 'Ghana', flag: getUnicodeFlagIcon('gh') },
  { group: 'H', order: 3, name: 'Uruguay', flag: getUnicodeFlagIcon('uy') },
  {
    group: 'H',
    order: 4,
    name: 'Korea Republic',
    flag: getUnicodeFlagIcon('kr'),
  },
];

export const groups: Group[] = [
  { name: 'A', teams: fifa.filter((team) => team.group === 'A') },
  { name: 'B', teams: fifa.filter((team) => team.group === 'B') },
  { name: 'C', teams: fifa.filter((team) => team.group === 'C') },
  { name: 'D', teams: fifa.filter((team) => team.group === 'D') },
  { name: 'E', teams: fifa.filter((team) => team.group === 'E') },
  { name: 'F', teams: fifa.filter((team) => team.group === 'F') },
  { name: 'G', teams: fifa.filter((team) => team.group === 'G') },
  { name: 'H', teams: fifa.filter((team) => team.group === 'H') },
];
