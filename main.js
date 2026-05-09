//Напиши програму пошуку веб-інструментів за назвою. Виведи інформацію про інструмент, якщо він знайдений, або повідомлення про те, що інструмент не знайдений.
const webTools = [
    { name: "Google Analytics", description: "A web analytics service offered by Google that tracks and reports website traffic." },
    { name: "WordPress", description: "A content management system (CMS) that allows users to create and manage websites easily." },        
    { name: "Canva", description: "A graphic design platform that allows users to create social media graphics, presentations, posters, and other visual content." },
    { name: "Trello", description: "A web-based project management application that helps teams organize and prioritize their work." },
    { name: "Slack", description: "A messaging app for teams that allows for communication and collaboration in real-time." }
];

function findWebToolByName(name) {
    const tool = webTools.find(t => t.name.toLowerCase() === name.toLowerCase());
    if (tool) {
        console.log(`Інструмент знайдений: Назва: ${tool.name}, Опис: ${tool.description}`);
    } else {
        console.log("Інструмент не знайдений.");
    }
}

const webToolName = "Google Analytics"; // Заміни на назву інструменту, який хочеш знайти
findWebToolByName(webToolName);