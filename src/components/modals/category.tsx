export interface Category {
  id: string;
  title: string;
  color: string;
}

const Italian: Category = {
  id: 'c1',
  title: 'Italian',
  color: '#f5428d',
};

const QuickEasy: Category = {
  id: 'c2',
  title: 'Quick & Easy',
  color: '#f54242',
};

const Hamburgers: Category = {
  id: 'c3',
  title: 'Hamburgers',
  color: '#f5a442',
};

const German: Category = {
  id: 'c4',
  title: 'German',
  color: '#f5d142',
};

const LightLovely: Category = {
  id: 'c5',
  title: 'Light & Lovely',
  color: '#368dff',
};

const Exotic: Category = {
  id: 'c6',
  title: 'Exotic',
  color: '#41d95d',
};

const Breakfast: Category = {
  id: 'c7',
  title: 'Breakfast',
  color: '#9eecff',
};

const Asian: Category = {
  id: 'c8',
  title: 'Asian',
  color: '#f5a442',
};

const French: Category = {
  id: 'c9',
  title: 'French',
  color: '#ffc7ff',
};

const Summer: Category = {
  id: 'c10',
  title: 'Summer',
  color: '#47fced',
};

export const CATEGORIES = [
  Italian,
  QuickEasy,
  Hamburgers,
  German,
  LightLovely,
  Exotic,
  Breakfast,
  Asian,
  French,
  Summer,
];
