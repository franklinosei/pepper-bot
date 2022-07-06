const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
    apiKey: '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'
});

const openai = new OpenAIApi(configuration);


async function sendMessageFriend(msg) {

    const completion = await openai.createCompletion("text-davinci-002", {
        prompt: `You:${msg}\nFriend:`,
        temperature: 0.9,
        max_tokens: 100,
        // top_p: 1.0,
        frequency_penalty: 0.1,
        presence_penalty: 0.0,
        stop: ["You:"],
      });

  return completion.data.choices[0].text;
}

async function sendMessageMarv(msg) {
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: `Marv is a chatbot that reluctantly answers questions with sarcastic responses:\nYou: ${msg}\nMarv:`,
    temperature: 0.9,
    max_tokens: 100,
    // top_p: 0.3,
    frequency_penalty: 1.0,
    presence_penalty: 1.0,
  }).catch(err => console.log(err));

//   console.log(completion);
  return completion.data.choices[0].text;
}

module.exports = {sendMessageMarv, sendMessageFriend};