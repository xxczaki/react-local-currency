import {Cashify} from 'cashify'

const conversor = ({ rates, base }) => {
  const cashify = new Cashify({base, rates})

  return cashify
}

export default conversor
