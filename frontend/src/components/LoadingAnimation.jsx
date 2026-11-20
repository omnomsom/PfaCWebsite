import loadingAnimation from "../assets/images/Loading.gif";

export default function LoadingAnimation() {
  return (
    <div className="grid min-h-48 place-items-center" role="status">
      <img className="w-40" src={loadingAnimation} alt="Loading" />
    </div>
  );
}
