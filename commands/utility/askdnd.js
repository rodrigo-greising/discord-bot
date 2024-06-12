const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask')
        .setDescription('Returns an answer to rules questions')
        .addStringOption(option => 
            option.setName('question')
            .setDescription('The question you want to ask')
            .setRequired(true)), // This makes the question a required field
    async execute(interaction) {
        // Retrieve the question from the interaction options
        //const question = interaction.options.getString('question');
        
        
        // Make the axios POST request to localhost:3000/api/chat
        const response = await axios.post('http://localhost:3000/api/chat', {
            messages: [{content: question}]
        });

        // Rest of the code...

        
        await interaction.reply('The range of the spell Fireball is 150 feet.');
    },
};
