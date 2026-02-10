
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'ACCUEIL', path: '/' },
  {
    label: 'SOCIÉTÉ',
    path: '/societe',
    children: [
      { label: 'PRÉSENTATION', path: '/societe/presentation' },
      { label: 'CGV', path: '/societe/cgv' },
    ],
  },
  { label: 'COMMANDER', path: '/commander' },
  { label: 'CONTACT', path: '/contact' },
];

export const SOUVENIR_CATEGORIES = [
  'Ville', 'Art', 'Châteaux', 'Mer', 'Montagne', 'Grottes',
  'Gaulois et romains', 'Articles religieux', 'Guerre et paix',
  'Instruments musicaux', 'Animaux', 'Tapis oriental'
];

export const PLACEHOLDER_IMG = (w: number, h: number, text: string) => `https://picsum.photos/seed/${encodeURIComponent(text)}/${w}/${h}`;
