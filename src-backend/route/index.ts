/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import {Request, Response, Router} from "express";

const router = Router();

router.get('/app*', (req: Request, res: Response) => {
  res.render('index', {layout: false});
});

export default router;
