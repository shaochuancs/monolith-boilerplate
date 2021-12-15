[![CircleCI](https://circleci.com/gh/shaochuancs/web-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/shaochuancs/web-boilerplate/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/shaochuancs/web-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/shaochuancs/web-boilerplate?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/5b299dea8db6ee5f041a/maintainability)](https://codeclimate.com/github/shaochuancs/web-boilerplate/maintainability)

# web-boilerplate
Web application boilerplate

## Launch
1. Install pm2 globally (if not yet): `npm install -g pm2`
2. Install pm2-intercom to support logger in cluster mode: `pm2 install pm2-intercom`
3. Start app: `pm2 start dist/bundle.js --name app -i max`
