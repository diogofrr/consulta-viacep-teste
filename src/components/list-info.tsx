interface ListInfoProps {
  data: Record<string, any>;
}

export default function ListInfo({ data }: ListInfoProps) {
  return (
    <ul className="w-full">
      {Object.keys(data).map((key) => (
        <li key={`list-item-${key}`}>
          <span className="font-semibold">{key}: </span>
          {data[key]}
        </li>
      ))}
    </ul>
  )

}
