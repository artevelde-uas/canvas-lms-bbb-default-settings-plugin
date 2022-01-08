# Canvas LMS BigBlueButton Default Settings Plug-in

Plugin for the [Canvas LMS theme app](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-app) that
lets you change the default options when creating a new BigBlueButton conference.

[![](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-bbb-default-settings-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-bbb-default-settings-plugin)
[![](https://img.shields.io/github/license/artevelde-uas/canvas-lms-bbb-default-settings-plugin.svg)](https://spdx.org/licenses/ISC)
[![](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-bbb-default-settings-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-bbb-default-settings-plugin)

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-bbb-default-settings-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-bbb-default-settings-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';
import bbbDefaultSettingsPlugin from '@artevelde-uas/canvas-lms-bbb-default-settings-plugin';

addPlugin(bbbDefaultSettingsPlugin);

run();
```
