let data = {
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at tincidunt lacus. Fusce hendrerit pulvinar elit, eu maximus diam elementum non.Donec varius diam ac dignissim mollis. Nullam venenatis lorem nisl, ut viverra orci rhoncus eu. Suspendisse dignissim non velit eu interdum. Duis varius commodo ipsum faucibus malesuada.",
};

export default function About() {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-2xl font-bold">About</h1>
      <p className="font-mono">{data.about}</p>
    </div>
  );
}
