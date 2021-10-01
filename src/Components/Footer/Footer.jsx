import "./Footer.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import CodeIcon from "@mui/icons-material/Code";
export default function Footer() {
  return (
    <div className="footer">
      <hr></hr>
      <div className="footer-body">
        <div className="footer-left">
          &#169; 2021 <a href="#">Amit</a>
        </div>
        <a href="">
          <div className="footer-center">
            <MoreHorizOutlinedIcon />
            <ViewColumnIcon />
            <MoreHorizOutlinedIcon />
          </div>
        </a>
        <a href="#">
          <div className="footer-right">
            <CodeIcon />
            Source
          </div>
        </a>
      </div>
      <div className="footer-center"></div>
    </div>
  );
}
