import { FC, Fragment } from "react";
import { Button } from './components/Button'

const App: FC = () => {
  return (
    <Fragment>
      <Button
        color="white"
        rounded="md"
        duration="300"
      >
        test
      </Button>
    </Fragment>
  )
}

export default App