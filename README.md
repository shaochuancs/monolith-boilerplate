[![CircleCI](https://circleci.com/gh/shaochuancs/monolith-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/shaochuancs/monolith-boilerplate/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/shaochuancs/monolith-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/shaochuancs/monolith-boilerplate?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/e475aa377b0068f517af/maintainability)](https://codeclimate.com/github/shaochuancs/monolith-boilerplate/maintainability)

# monolith-boilerplate
Monolithic web application boilerplate

## Launch
1. Install pm2 globally (if not yet): `npm install -g pm2`
2. Install pm2-intercom to support logger in cluster mode: `pm2 install pm2-intercom`
3. Start app: `pm2 start dist/backend/bundle.js --name app -i max`