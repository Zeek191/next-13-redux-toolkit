export default function Input(props: JSX.IntrinsicElements['input']) {
  return (
    <input {...props} className="mb-4 border-2 rounded-md p-4 border-blue-400 hover:border-blue-600 duration-200" />
  );
}
