import { Profile } from "../atoms/Profile";
import '../../../styles/posts.css'
import { useState } from "react";
import { Username } from "../atoms/UserName";
import { Text } from "../atoms/Text";
import { ModalUser } from "../organism/ModalUser";

export const PostUser = ({ text, image, name, userData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    window.scrollTo(0, 0)
  };

  return (
    <div className="post">
      <div>
        <Profile src={image} prop="post_profile" handleShow={handleShow} />
        <ModalUser show={show} handleClose={handleClose} userData={userData} />
      </div>
      <div className="user_info">
        <Username name={name} prop="post_user" />
        <Text text={text} />
      </div>
    </div>
  )
}