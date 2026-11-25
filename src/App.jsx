import './App.css'
import Navbar from './Navbar'
import GrowzaHero from './GrowzaHero'
import SkillsCard from './SkillsCard'
import cpp from './assets/cpp.png'
import java from './assets/java.jpeg'
import linkedin from './assets/linkedin.jpeg'
import node from './assets/node.jpeg'
import python from './assets/python.jpeg'
import ui from './assets/ui.jpeg'

function App() {
  return (
      <>
        <Navbar></Navbar>
        <GrowzaHero></GrowzaHero>
        
        <div className="container">
          <div className="row flex-nowrap overflow-x-auto">  
            <SkillsCard image={linkedin} title="LinkedIn" desc="Know everything about LinkedIn" price="$99.0"></SkillsCard>
            <SkillsCard image={cpp} title="Cpp" desc="Know everything about Cpp" price="$99.0"></SkillsCard>
            <SkillsCard image={java} title="Java" desc="Know everything about Java" price="$99.0"></SkillsCard>
            <SkillsCard image={node} title="Node" desc="Know everything about Node" price="$99.0"></SkillsCard>
            <SkillsCard image={python} title="Python" desc="Know everything about Python" price="$99.0"></SkillsCard>
            <SkillsCard image={ui} title="Ui" desc="Know everything about Ui" price="$99.0"></SkillsCard>

          </div>
        </div>


      </>
  );
}

export default App
