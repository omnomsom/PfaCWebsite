import loadingAnimation from "../assets/images/Loading.gif";
import "./LoadingAnimation.css";

export default function LoadingAnimation() {
  return (
    <div className="loading-animation" role="status">
      <img src={loadingAnimation} alt="Loading" />
    </div>
  );
}
