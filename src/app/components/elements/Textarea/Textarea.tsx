export default function Textarea(props: JSX.IntrinsicElements['textarea']) {
  return (
    <textarea
      {...props}
      className="mb-4 border-2 rounded-md p-4 border-blue-400 resize-none hover:border-blue-600 duration-200"
    />
  );
}
