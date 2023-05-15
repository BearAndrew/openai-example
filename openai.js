const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
	apiKey: "API_KEY",
});

const openai = new OpenAIApi(config);

const runPrompt = async () => {
	const prompt = `請產生一篇繁體中文文章，全文不包含換行token，
    use JSON format {Category:a,Title:b,Content:c,Keyword:d}`;

    // createCompletion
	// const response = await openai.createCompletion({
	// 	model: "text-davinci-003",
	// 	prompt: prompt,
	// 	max_tokens: 2048,
	// 	temperature: 1,
	// });
    // const parsableJSONresponse = response.data.choices[0].text;
	// const parsedResponse = JSON.parse(parsableJSONresponse);
    // console.log("Question: ", parsedResponse.Q);
	// console.log("Answer: ", parsedResponse.A);


	const response = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [{role: "user", content: prompt}],
		max_tokens: 2048,
		temperature: 1,
	});
    console.log(response.data);
    console.log('\n\n');
    console.log(response.data.choices[0].message);
	const parsableJSONresponse = response.data.choices[0].message.content;
	const parsedResponse = JSON.parse(parsableJSONresponse);
    console.log('\n\n');
    console.log(parsedResponse);
};

runPrompt();