import { useContext } from 'react'

import { RouterContext } from 'containers/Application/context'

export default function useRouter () {
  return useContext(RouterContext)
}
