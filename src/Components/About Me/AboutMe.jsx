import GitHubIcon from "./GitHubIcon";
import FacebookIcon from "./FacebookIcon";
import CvIcon from "./CvIcon";
function AboutMe() {
  return (
    <>
      <div className="pl-40 pt-25">
        <img
          className="w-48 h-48 mt-10 rounded-full"
          src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
          alt="boy"
        />
        <div className="flex flex-col pt-5">
          <span className="text-3xl">Kent Lawrence V.</span>
          <span className="text-3xl">Salarda</span>
          <span className="text-2xl pt-2 pb-5">Frontend/Mobile Developer</span>
          <span className="text-xl">📍 Tagum City, Philippines </span>
        </div>
        <div className="flex flex-row">
          <CvIcon></CvIcon>
          <GitHubIcon></GitHubIcon>
          <FacebookIcon></FacebookIcon>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
