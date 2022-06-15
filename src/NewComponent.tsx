export type StudentType = {
    id: number
    name: string
    age: number
}

type NewComponentType = {
    students: Array<StudentType>
}

export const NewComponent = (props: NewComponentType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'n5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        /*<ul>
            {props.students.map((t) => {
                return (
                    <li key={t.id}>
                        <span>{t.name}</span>
                        <span> age: {t.age}</span>
                    </li>
                )
            })}
        </ul>*/
        <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>

            </tr>
            {topCars.map((t, index) => {
                return (
                    <tr key={++index}>
                        <td>{t.manufacturer}</td>
                        <td>{t.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}