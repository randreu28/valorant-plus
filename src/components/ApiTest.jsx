export default function ApiTest({
  json,
  title,
  description,
  endpoint,
  doc,
  isOptional,
}) {
  return (
    <div className="space-y-5 p-5">
      <div className="text-xl flex space-x-2">
        <h1>{title}</h1>
        <a
          href={doc}
          target={"_blank"}
          className="bg-blue-100 rounded p-1 px-2 underline text-sm"
        >
          {endpoint}
        </a>
        {isOptional && (
          <p className="text-xs bg-yellow-100 rounded p-1 px-2 my-auto">
            Opcional
          </p>
        )}
      </div>
      <p className="text-gray-500 max-w-2xl">{description}</p>
      <pre className="bg-gray-200 overflow-scroll rounded-lg p-2 max-h-96">
        {JSON.stringify(json[0], null, 2)}
      </pre>
    </div>
  );
}
