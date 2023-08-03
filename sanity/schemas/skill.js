const skill = {
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        {
            name: "title",
            title: "title",
            description: "Title of the skill",
            type: "string",
        },
        {
            name: "progress",
            title: "Progress",
            type: "string",
            description: "Progress of skill"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
    ],
};

export default skill;