import { NavLink } from "react-router-dom";
import "./profileCard.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import HireMeButton from "./HireMeButton";
const ProfileCard = () => {
    return (<>
        <div class="profile-card">
            <img src="./images/mehraj.jpg" alt="Profile Photo" class="profile-photo"></img>
                <h2 class="profile-name">Mir Mehraj Mushtaq</h2>
                <div class="social-links">
                    <NavLink href="#" target="_blank" class="social-link" aria-label="LinkedIn">
                    <FaLinkedin />
                    </NavLink>
                    <NavLink href="#" target="_blank" class="social-link" aria-label="Twitter">
                    <FaSquareXTwitter />
                    </NavLink>
                    <NavLink href="#" target="_blank" class="social-link" aria-label="GitHub">
                    <FaGithubSquare />
                    </NavLink>
                </div>
                    <HireMeButton/>
        </div>
    </>)
}
export default ProfileCard;