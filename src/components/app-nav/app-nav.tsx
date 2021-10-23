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

import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { NavItem } from '../app-home/app-user-header/app-user-nav/user-nav';

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.css',
  shadow: true
})
export class AppNav {
  @Prop()
  items: NavItem[];

  @Event()
  itemClick?: EventEmitter<NavItem>;

  @State()
  selectedItemId: number;

  constructor() {
    this.items = [];
    this.selectedItemId = -1;
  }

  render() {
    const getClass = (item: NavItem) => item.id === this.selectedItemId ? 'selected' : '';
    const mapItem = (item: NavItem) => (
      <li
        id={ item.id.toString() }
        key={ item.id.toString() }
        class={ getClass(item) }
        onClick={ e => this.onItemClick(e) }
      >
        <span>{ item.value }</span>
      </li>
    );
    return (
      <nav>
        <p>Menu</p>
        <ul>
          { this.items.map(mapItem) }
        </ul>
      </nav>
    );
  }

  onItemClick(event: MouseEvent) {
    const el = event.currentTarget as HTMLUListElement;
    const id = parseInt(el.id);
    const item = this.items.find(item => item.id === id);
    this.selectedItemId = item?.id || -1;

    this.itemClick?.emit(item);
  }
}
