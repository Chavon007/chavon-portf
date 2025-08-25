import Image from "next/image";

function About() {
  return (
    <div className="container mx-auto pt-[20px]">
      <h2 className="text-center text-[#ccd6f6] text-3xl font-bold font-sans">
        About Me
      </h2>

      {/*about me */}
      <div className="w-[90%] mx-auto pt-[20px] flex justify-between items-center">
        {/*about info*/}
        <div className="w-[50%]">
          <h3 className="w-[90%] mx-auto text-sm text-center md:text-2xl font-serif tracking-[5px] p-[10px] md:font-semibold text-[#3d9d91]">
            Full-Stack Web Developer
          </h3>
          <p>
            I am Salvation, a Full-Stack Web Developer who doesn’t just write
            code. I architect, build, and ship high-performance web solutions
            that speak for themselves.
          </p>
          <p>
            With hands-on experience in HTML, CSS, JavaScript, TypeScript,
            React, Next.js, Node.js, Express, and MongoDB, I build full-stack
            applications that are clean, scalable, and fast. I specialize in
            turning complex ideas into responsive, functional, and user-driven
            digital experiences.
          </p>
          <p>
            Every project I touch is built with precision, bold energy, and zero
            shortcuts. I work across the stack with confidence, from API
            architecture to pixel-perfect frontends.
          </p>
        </div>
        {/* about image */}
        <div className="w-[50%]">
          <Image src="" alt="" width={100} height={100} />
        </div>
      </div>

      {/*about me skills */}
      <div></div>

      {/*What i do */}

      <div></div>
    </div>
  );
}
export default About;
