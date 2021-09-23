import { cfx } from './logic/cfx'
import { styles } from './util/tailwind'
import { useLazyViews } from './logic/views'
import './tailwind.css'

const views = useLazyViews('base')

export default function App() {
    return <div className={'font-sans text-base text-white' + styles(cfx.development(), 'bg-mock', 'bg-cover')}>{views}</div>
}
