import Header from './components/Header/Header'
import './App.css'
import { useState } from 'react'
import TeachingSection from './components/TeachingSection';
import DifferencesSection from './components/DifferencesSection';
import TabsSection from './components/TabsSection';
import IntroSection from './components/IntroSection';
import FeedbackSection from './components/FeedbackSection';
import EffectSection from './components/EffectSection';

function App() {
  const [tab, setTab] = useState('effect')

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={setTab} />

        {tab === 'main' && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}

        {tab === 'effect' && <EffectSection />}
      </main>
    </>
  )
}

export default App
