"use client"

import { StorageIcon, PsychologyIcon, TimelineIcon } from '@/app/components/icons';
import { ROUTES } from '@/app/routes/routes';


export const chapters = [
  { href: ROUTES.chapter1, label: 'Why Data Structures Matter', chapterLabel: 'Chapter 1', Icon: StorageIcon },
  { href: ROUTES.chapter2, label: 'Why Algorithms Matter',      chapterLabel: 'Chapter 2', Icon: PsychologyIcon },
  { href: ROUTES.chapter3, label: 'Yes! Big O Notation',        chapterLabel: 'Chapter 3', Icon: TimelineIcon },
];
