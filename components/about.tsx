let data = {
  about:
    "Experienced Full Stack Engineer with a passion for creating seamless user experiences. Over four years of hands-on experience in developing and implementing robust web applications. Proficient in both front-end and back-end technologies, with a keen focus on user-centric design. Adept at collaborating with cross-functional teams to deliver high-quality software solutions.",
};

export default function About() {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-lg sm:text-2xl font-bold">About</h1>
      <p className="font-mono text-sm sm:text-md">{data.about}</p>
    </div>
  );
}
