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
        <div>New Component</div>
    )
}