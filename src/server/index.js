import * as skillFaq from 'ringcentral-personal-chatbot-skill-faq'
import * as skillTime from 'glip-personal-bot-skill-time'
// import skillPack from 'ringcentral-personal-bot-skill-pack-simple'

const { RINGCENTRAL_CHATBOT_SERVER, SERVER_HOME = '/' } = process.env
const appHome = RINGCENTRAL_CHATBOT_SERVER + SERVER_HOME

export const name = 'FAQ Bot'
export const description = 'You can set FAQ keywords and answers in FAQ skill setting.'
export const homepage = RINGCENTRAL_CHATBOT_SERVER
  ? appHome
  : 'https://github.com/rc-personal-bot-framework/faq-glip-personal-bot#readme'

// export const skills = [skillFaq, ...skillPack]
export const skills = [skillFaq, skillTime]

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
