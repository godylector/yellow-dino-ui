import { FC, Fragment } from "react";

import { Button } from "./components/Button";

const App: FC = () => {
  return (
    <Fragment>
      <div className="p-4">
        <Button>
          สวัสดี
        </Button>
      </div>
    </Fragment>
  )
}

export default App