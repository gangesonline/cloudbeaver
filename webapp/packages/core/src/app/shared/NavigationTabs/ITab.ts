/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

export interface ITabOptions<T = any> {
  id?: string;
  handlerId: string;
  handlerState: T;
  name?: string;
  icon?: string;
}

export interface ITab<T = any> extends ITabOptions<T> {
  id: string;
}
