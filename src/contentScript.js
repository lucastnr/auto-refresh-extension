'use strict';

import { receiveMessage } from './utils/message';

receiveMessage('RELOAD_PAGE', () => {
  console.log('Received');
});
