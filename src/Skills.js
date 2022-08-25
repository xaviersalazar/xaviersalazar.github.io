const skills = [
  { skill: "js", name: "Javascript" },
  { skill: "react", name: "React" },
  { skill: "node", name: "Node/Express" },
  { skill: "ts", name: "Typescript" },
  { skill: "java", name: "Java/Spring" },
  { skill: "graphql", name: "GraphQL" },
  { skill: "angular", name: "Angular" },
  { skill: "sql", name: "SQL" },
  { skill: "python", name: "Python" },
];

const Skills = () => (
  <div className="mt-8 z-50" id="skills">
    {skills.map(({ skill, name }) => (
      <div key={skill} className="relative my-2">
        <div
          className="skill-bar rounded-md w-0 h-6 bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]"
          style={{
            "--skill": skill,
          }}
        />
        <p className="text-sm font-regular mr-4 text-white absolute bottom-0.5 left-2">
          {name}
        </p>
      </div>
    ))}
  </div>
);

export default Skills;
