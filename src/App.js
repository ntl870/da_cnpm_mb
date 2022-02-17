import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { getRandomUser } from './api/routes'

const App = () => {
  const [person, setPerson] = useState()
  useEffect(() => {
    getRandomUser().then(({ data }) => setPerson(data))
    // .catch((err) => console.log(err))
  }, [])

  return (
    <SafeAreaView>
      <Text>{person?.address?.city}</Text>
    </SafeAreaView>
  )
}

export default App
