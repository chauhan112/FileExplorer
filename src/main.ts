import "./style.css";
import { LocalExpController } from "./orlib/timeline/t2025/july/FileExplorer";

const fe = LocalExpController();

document
    .querySelector<HTMLDivElement>("#app")!
    .appendChild(fe.comp.getElement());
