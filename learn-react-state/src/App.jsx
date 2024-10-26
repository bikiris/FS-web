import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(100)
  const [cookieperclick, setCookieperclick] = useState(1)
  const [upgradeCost, setUpgradeCost] = useState(100)

  const handleClick = () => {
    setCount(count + cookieperclick)
  }

  const handleUpgrade1 = () => {
    if (count >= upgradeCost) {
      setCount(count - upgradeCost)
      setCookieperclick(cookieperclick + 1)
      setUpgradeCost(upgradeCost * 2)
    }
  }

  return (
    <div>
      <h1>Cookie Clicker</h1>
      <h2>count: {count}</h2>
      <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.senscritique.com%2Fmedia%2F000009086782%2Fsource_big%2FCookie_Clicker.png&f=1&nofb=1&ipt=2cb417eade90fc42f91327b0534eabbbae8ef2285a83c45c0536e4841e76db99&ipo=images'
        alt='cookie' width={"200px"} id="cookie" onClick={handleClick}/>
      <div>
        <button onClick={handleUpgrade1}>
          Increase cookie per click by 1.
          cost: {upgradeCost}
        </button>
      </div>
    </div>
  )
}

export default App