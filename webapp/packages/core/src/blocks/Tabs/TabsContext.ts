/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { createContext } from 'react';
import { TabStateReturn } from 'reakit/Tab';

export const TabsContext = createContext<TabStateReturn | undefined>(
  undefined
);
