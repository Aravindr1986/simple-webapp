import { Router } from 'express';
var router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Aravind'}]});
});

export default router;
