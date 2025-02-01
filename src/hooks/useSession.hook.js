import { useContext } from 'react'
import { SessionContext } from '@/providers/SessionProvider'

const useSession = () => useContext(SessionContext);

export { useSession }
