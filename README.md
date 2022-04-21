# faq-glip-personal-bot

Personal FAQ bot created with [RingCentral personal chatbot js](https://github.com/ringcentral/ringcentral-personal-chatbot-js).

## Quick start

Let's start a simple chatbot server and login to it with you sandbox glip account, and you account will auto respond to keywords set by you.

## Video

[https://youtu.be/CEzEAQ4rSQY](https://youtu.be/CEzEAQ4rSQY)

```bash
# get the code
git clone git@github.com:rc-personal-bot-framework/faq-glip-personal-bot.git
cd faq-glip-personal-bot

# install dependecies
npm i

# start proxy server, this will make your local bot server can be accessed by RingCentral service
npm run ngrok

# will show
Forwarding                    https://xxxx.ap.ngrok.io -> localhost:4100
# Remember the https://xxxx.ap.ngrok.io, we will use it later

# start local dynamodb
npm run dynamo
```

Login to [developer.ringcentral.com](https://developer.ringcentral.com/) and create REST API App:

- Application Type: Public
- Platform Type: Browser-based
- Carrier: accept the default values
- Permissions Needed: Accounts, Team messaging, Read Accounts, Webhook Subscriptions
- Set OAuth Redirect URI: Using your ngrok HTTPS URL from above, enter in the following value: `https://xxxx.ap.ngrok.io/rc/oauth`.

```bash
cp .env.sample .env
# then fill all required fields in .env, you can get client ID / secret from app setting

# run sample hello bot
npm start

```

Then visit [https://xxxx.ap.ngrok.io](https://xxxx.ap.ngrok.io) to login, after auth, you can set `Bot skill: FAQ`'s keywords and answers from its skill setting page. Then try the keywords with another account.

## Build

```bash
# build
npm run build

```

## Links

- [developer.ringcentral.com](https://developer.ringcentral.com/), Register as RingCentral developer, create Apps with RingCentral APIs.
- [game changer program](https://gamechanging.dev), Learn and use RingCentral APIs, get reward points/gears/electronics.
