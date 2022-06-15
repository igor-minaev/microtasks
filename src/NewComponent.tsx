export type StudentType = {
    id: number
    name: string
    age: number
}

type NewComponentType = {
    students: Array<StudentType>
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((t) => {
                return (
                    <li key={t.id}>
                        <span>{t.name}</span>
                        <span> age: {t.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}