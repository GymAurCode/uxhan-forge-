import { releases as taqwa } from './taqwa-habit';
import { releases as uxblox } from './uxblox';
import { releases as railbop } from './railbop';
import type { Release } from './site';

export const releaseHistory: Record<string, Release[]> = {
  'taqwa-habit': taqwa,
  uxblox,
  railbop,
};
