async function handler({ query }) {
  if (!query || typeof query !== "string") {
    return { error: "Invalid search query" };
  }

  const searchTerm = query.toLowerCase();

  const content = {
    "Bible Knowledge": {
      "Standard 5": ["Creation", "The Fall of Man", "Noah and the Flood"],
      "Standard 6": ["Abraham", "Moses and the Exodus", "The Ten Commandments"],
      "Standard 7": ["King David", "The Prophets", "Jesus Birth"],
      "Standard 8": ["Jesus Ministry", "The Crucifixion", "The Early Church"],
    },
    Agriculture: {
      "Standard 5": ["Soil Types", "Plant Growth", "Basic Farm Tools"],
      "Standard 6": ["Crop Rotation", "Irrigation", "Pest Control"],
      "Standard 7": [
        "Animal Husbandry",
        "Sustainable Farming",
        "Farm Management",
      ],
      "Standard 8": [
        "Agricultural Economics",
        "Modern Farming Methods",
        "Climate Change",
      ],
    },
    "Science and Technology": {
      "Standard 5": ["Matter States", "Simple Machines", "Basic Electronics"],
      "Standard 6": [
        "Energy Forms",
        "Human Body Systems",
        "Environmental Science",
      ],
      "Standard 7": ["Chemical Reactions", "Force and Motion", "Space Science"],
      "Standard 8": ["Genetics", "Electricity", "Earth Science"],
    },
    "Social Studies": {
      "Standard 5": [
        "Local Communities",
        "Geography Basics",
        "Cultural Traditions",
      ],
      "Standard 6": [
        "Government Systems",
        "Economic Basics",
        "Historical Events",
      ],
      "Standard 7": ["World Geography", "Citizenship", "Global Trade"],
      "Standard 8": [
        "Current Affairs",
        "International Relations",
        "Social Issues",
      ],
    },
    "Life Skills": {
      "Standard 5": [
        "Personal Hygiene",
        "Basic First Aid",
        "Communication Skills",
      ],
      "Standard 6": [
        "Decision Making",
        "Time Management",
        "Conflict Resolution",
      ],
      "Standard 7": [
        "Financial Literacy",
        "Digital Safety",
        "Health and Wellness",
      ],
      "Standard 8": [
        "Career Planning",
        "Leadership Skills",
        "Environmental Awareness",
      ],
    },
    "Expressive Arts": {
      "Standard 5": ["Drawing Basics", "Music Elements", "Traditional Dance"],
      "Standard 6": ["Color Theory", "Drama Basics", "Craft Making"],
      "Standard 7": ["Sculpture", "Musical Instruments", "Contemporary Dance"],
      "Standard 8": ["Art History", "Theatre Production", "Digital Art"],
    },
  };

  const results = [];

  for (const [subject, classes] of Object.entries(content)) {
    for (const [level, topics] of Object.entries(classes)) {
      const matchingTopics = topics.filter((topic) =>
        topic.toLowerCase().includes(searchTerm)
      );

      if (matchingTopics.length > 0) {
        results.push({
          subject,
          level,
          topics: matchingTopics,
        });
      }
    }
  }

  return {
    results,
    count: results.length,
  };
}
export async function POST(request) {
  return handler(await request.json());
}