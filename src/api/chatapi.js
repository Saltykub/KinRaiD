import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true });

async function chatgpt(data) {
  let query = "";
  for(let i = 0; i < data.length; i++) {
    query += data[i].name + ': ' + data[i].pick + '\n';
  }
  console.log('hi', data, query)
  const completion = await openai.chat.completions.create({
    messages: [
        {role: "system", content: "You will be provided with food characteristics in yes-no-maybe form. \
        Your job is to provide a list of five food corresponding to the given characteristics. \
        Provide your answer in bullet point (not numbering) form."},
        {role: "user", content: query}
    ],
    model: "gpt-3.5-turbo",
  });
  console.log("chat", completion.choices[0], completion['choices'][0]['message']['content']);
  return completion['choices'][0]['message']['content']
}

export default chatgpt