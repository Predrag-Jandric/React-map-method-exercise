import { skillsData } from "./skillsData";

function App() {
  return (
    <div className="card">
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <img className="avatar" src="profileImg.jpg" alt="my profile" />
      <h1>Predrag Jandric</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
        laudantium reiciendis vero debitis voluptates itaque fuga ipsam incidunt
        ipsum tempora harum repellat doloremque deserunt, ad
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skillsData.map((skill) => (
        <li className="skill" style={{ backgroundColor: skill.color }}>
          <span>{skill.name}</span>
          <span>
            {skill.level === "beginner"
              ? "💪"
              : skill.level === "intermediate"
              ? "👍"
              : skill.level === "advanced"
              ? "😲"
              : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default App;
