interface IProps {
    title: string,
    count: number
}
export default function Count({ title, count }: IProps) {
    return (
        <div>
            <p>
                title: {title}
            </p>
            <p>
                count: {count}
            </p>
        </div>
    )
}
