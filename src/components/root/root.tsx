// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/tobiasbriones/my-page.

import { Component, h, Host } from '@stencil/core';
import { Header } from './header';

@Component({
  tag: 'me-root',
  styleUrl: 'root.scss',
  shadow: true
})
export class Root {
  render() {
    return (
      <Host>
        <Header/>
        <me-main/>
      </Host>
    );
  }
}
