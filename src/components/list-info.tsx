interface ListInfoProps {
  data: Record<string, any>;
}

export default function ListInfo({ data }: ListInfoProps) {
  return (
    <ul>
      {Object.keys(data).map((key) => (
        <li key={`list-item-${key}`}>
          <span>{key}: </span>
          {data[key]}
        </li>
      ))}
    </ul>
  )

}
