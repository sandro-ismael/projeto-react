import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Siderbar';


import styles from './App.module.css';

import './Global.css'

export function App() {

  return (
    <div>
      <Header />


        <div className= {styles.wrapper}>
          <Sidebar /> 
          <main>
            <Post 
            author="Alessandro" 
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta distinctio harum iure incidunt quidem dignissimos animi vel nostrum maxime cum odit accusamus, error suscipit autem libero porro culpa debitis blanditiis!"
            />
            <Post
            author="Ismael"
            content="Não sei"
            />
          </main>
        </div>
    </div>
  )
}

