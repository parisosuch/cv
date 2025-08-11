let data = {
  about:
    "Eccentric full stack software engineer with over 6 years of professional experience. Paris is keen on creating a seemless user experience and often explores new technology stacks to implement into his workflow.",
};

export default function About() {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-lg sm:text-2xl font-bold">About</h1>
      <p className="font-mono text-sm sm:text-md">{data.about}</p>
    </div>
  );
}
