import Monday from './Specials/monday'
import Tuesday from './Specials/tuesday'
import Wednesday from './Specials/wednesday'
import Thursday from './Specials/thursday'
import Friday from './Specials/friday'
import Saturday from './Specials/saturday'

const SpecData = [
    {
        Title: 'Monday',
        id: 'monday',
        content: (
        <ul className='list-disc pl-2'>
            <h2>Monday Special</h2>
            <strong>{Monday.name}</strong>:
            <br></br>
            <span>{Monday.description}</span>
            <br></br>
            <span>${Monday.price}</span>
        </ul>
        )
    },
    {
        Title: 'Tuesday',
        id: 'tuesday',
        content: (
        <ul className='list-disc pl-2'>
            <h2>Tuesday Special</h2>
            <strong>{Tuesday.name}</strong>:
            <br></br>
            <span>{Tuesday.description}</span>
            <br></br>
            <span>${Tuesday.price}</span>
        </ul>
        )
    },
    {
        Title: 'Tuesday',
        id: 'tuesday',
        content: (
        <ul className='list-disc pl-2'>
            <h2>Tuesday Special</h2>
            <strong>{Tuesday.name}</strong>:
            <br></br>
            <span>{Tuesday.description}</span>
            <br></br>
            <span>${Tuesday.price}</span>
        </ul>
        )
    },
    {
        Title: 'Wednesday',
        id: 'wednesday',
        content: (
        <ul className='list-disc pl-2'>
            <h2>Wednesday Special</h2>
            <strong>{Wednesday.name}</strong>:
            <br></br>
            <span>{Wednesday.description}</span>
            <br></br>
            <span>${Wednesday.price}</span>
        </ul>
        )
    },
    {
        Title: 'Thursday',
        id: 'thursday',
        content: (
        <ul className='list-disc pl-2'>
            <h2>Thursday Special</h2>
            <strong>{Thursday.name}</strong>:
            <br></br>
            <span>{Thursday.description}</span>
            <br></br>
            <span>${Thursday.price}</span>
        </ul>
        )
    },
    {
        Title: 'Friday',
        id: 'friday',
        content: (
        <ul className='list-disc pl-2'>
            <h2>Friday Special</h2>
            <strong>{Friday.name}</strong>:
            <br></br>
            <span>{Friday.description}</span>
            <br></br>
            <span>${Friday.price}</span>
        </ul>
        )
    },
    {
        Title: 'Saturday',
        id: 'saturday',
        content: (
        <ul className='list-disc pl-2'>
            <h2>Saturday Special</h2>
            <strong>{Saturday.name}</strong>:
            <br></br>
            <span>{Saturday.description}</span>
            <br></br>
            <span>${Saturday.price}</span>
        </ul>
        )
    },

]

export default SpecData