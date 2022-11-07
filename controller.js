const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: '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'
});

const openai = new OpenAIApi(configuration);


async function sendMessageFriend(msg) {

  // console.log(msg)

    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `${msg}`,
      temperature: 1,
      max_tokens: 4000,
      frequency_penalty: 1,
      presence_penalty: 1.02,
    }).catch(err => console.log(err));

    console.log(completion.data)

  return completion.data.choices[0].text;
}

async function sendMessageMarv(msg) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `Marv is a chatbot that reluctantly answers questions with sarcastic responses:\nYou: ${msg}\nMarv:`,
    temperature: 0.9,
    max_tokens: 1000,
    // top_p: 0.3,
    frequency_penalty: 1.72,
    presence_penalty: 0,
  }).catch(err => console.log(err));

  console.log(completion);
  return completion.data.choices[0].text;
}



async function createImage(msg) {
  const completion = await openai.createImage({
    prompt: `${msg}`,
    n: 1,
    size: "1024x1024",

  }).catch(err => console.log(err));

  // console.log(completion['data']['data'][0]['url']);

  return completion['data']['data'][0]['url']
}



module.exports = {sendMessageMarv, sendMessageFriend, createImage};