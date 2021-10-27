/*
 * Copyright (c) 2021 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of Brief Personal Landing Page.
 *
 * This source code is licensed under the MIT License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
 */

import { NavItem } from '../../../app-nav/nav-item';

export enum ItemId {
  PROFILE = 1,
  INTERNSHIPS,
  COURSES,
  HONORS,
  INTERESTS
}

export function getNavItems(): NavItem[] {
  return VALUES;
}

const VALUES: NavItem[] = [
  {
    id: ItemId.PROFILE,
    value: 'Profile',
    iconSrc: getIconSrc('person')
  },
  {
    id: ItemId.INTERNSHIPS,
    value: 'Internships',
    iconSrc: getIconSrc('location-city')
  },
  {
    id: ItemId.COURSES,
    value: 'Courses',
    iconSrc: getIconSrc('school')
  },
  {
    id: ItemId.HONORS,
    value: 'Honors',
    iconSrc: getIconSrc('military-tech')
  },
  {
    id: ItemId.INTERESTS,
    value: 'Interests',
    iconSrc: getIconSrc('interests')
  }
];

function getIconSrc(name: string): string {
  const ASSETS_MD = './assets/icon/md';
  return `${ ASSETS_MD }/${ name }`;
}
