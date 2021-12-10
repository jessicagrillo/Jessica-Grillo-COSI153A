import React, { useState } from "react";
import ValueProvider from './ValueContext';
import CounterWithContext from './CounterWithContext'
const Context = () => {
  const data = {total:0, count:0, log:[]}
  return (
    <ValueProvider value={data}>
        <CounterWithContext />
    </ValueProvider>
  )
}
export default Context