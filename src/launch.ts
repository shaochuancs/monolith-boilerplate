/**
 * Created by cshao on 2020-03-02.
 */

'use strict';

import Logger from './logger/Logger';
import ConfigService from "./service/ConfigService";
import router from "./routes";
import {getAccessRecordFromRequest} from "./utils/network";

const express = require('express');

/**
 * Launch server
 */
function launch(): void {
  const app = express();
  app.set('trust proxy', true);

  app.use((req, res, next)=>{
    const originSend = res.send;
    res.send = function(data) {
      Logger.info(getAccessRecordFromRequest(req, res, data.length, new Date()), Logger.CATEGORY.HTTP);
      res.send = originSend;
      return res.send(data);
    }
    next();
  });

  app.use('/', router);

  app.use(function (err, req, res, next) { // eslint-disable-line @typescript-eslint/no-unused-vars
    Logger.error(err);
    res.status(500).send(err.message);
  });

  const port = ConfigService.getConfig('PORT');
  app.listen(port, ()=>{
    Logger.info(`Application listening on port: ${port}`);
  }).on('close', Logger.shutdown);
}

export default launch;
