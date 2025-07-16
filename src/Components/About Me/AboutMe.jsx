function AboutMe() {
  return (
    <>
      <div className="flex items-center justify-center">
        <img
          className="w-48 h-48 mt-10 rounded-full"
          src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
          alt="boy"
        />
        <div className="flex flex-col pl-4 gap-2 mt-10">
          <span className="text-4xl">First Name</span>
          <span className="text-5xl mb-5">Last Name</span>
        </div>
      </div>
      <p className="text-center text-3xl mt-15 mb-5 font-semibold">About Me</p>
      <p className="max-w-3xl mx-auto text-center text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
}
export default AboutMe;
