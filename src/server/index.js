import * as skillFaq from 'ringcentral-personal-chatbot-skill-faq'
import * as skillTime from 'glip-personal-bot-skill-time'
// import skillPack from 'ringcentral-personal-bot-skill-pack-simple'

export const name = 'FAQ Bot'
export const description = 'You can set FAQ keywords and answers in FAQ skill setting.'
export const homepage = 'https://github.com/rc-personal-bot-framework/faq-glip-personal-bot#readme'
// export const skills = [skillFaq, ...skillPack]
let skills0 = [skillFaq, skillTime]
const { RINGCENTRAL_CHATBOT_SERVER, SERVER_HOME } = process.env
const appHome = RINGCENTRAL_CHATBOT_SERVER + SERVER_HOME
skills0 = skills0.map(s => {
  return {
    ...s,
    homepage: appHome
  }
})

export const skills = skills0

/*
export const onPostAdd = async ({
  text, // original text
  textFiltered, // text without metion user
  group,
  user,
  handled, // hanlded by prev skills
  shouldUseSignature // should use signature like "send by bot skill xxx" in message.
}) => {
  if (handled) {
    return false
  }
  let sign = shouldUseSignature
    ? `\n(send by [${exports.name}](${exports.homepage}))`
    : ''
  console.log(text, textFiltered, group, user, handled, shouldUseSignature)
  if (textFiltered.toLowerCase() === 'hello') {
    await user.sendMessage(group.id, {
      text: 'Hi' + sign
    })
  }
}
*/
