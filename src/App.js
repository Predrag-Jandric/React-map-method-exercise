function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profileImg.jpg" alt="my profile" />;
}

function Intro() {
  return (
    <div>
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
    <div className="skill-list">
      <Skill name="HTML+CSS" emoji="💪" color="lightblue"/>
      <Skill name="JavaScript" emoji="💪" color="yellow"/>
      <Skill name="Web Design" emoji="💪" color="lightgreen"/>
      <Skill name="Git and Github" emoji="👍" color="pink"/>
      <Skill name="React" emoji="💪" color="cyan"/>
      <Skill name="Svelte" emoji="😲" color="red"/>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
