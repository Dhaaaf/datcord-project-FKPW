import { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkEditServerMember } from "../../store/serverMembers";
import "./NickNameEdit.css"


const NickNameEdit = ({member, onChange, serverId, endEditNickName}) => {
    let dispatch = useDispatch();
    const [errors, setErrors] = useState([])
    let [nickName, setnickName] = useState(member.nickname)

    const changeNickname = (e) => {
        e.preventDefault()
        member.nickname = nickName
        let editMembership = dispatch(thunkEditServerMember(serverId, member.id, member))
        .catch(async (res) => {
            const data = await res.json()
            if (data && data.errors) setErrors(data.errors);
        })
        onChange(false)
        endEditNickName()
    }

    return (
        <>
        <form onSubmit={changeNickname} className="edit-nickname-form">
				<input
					value={nickName}
					onChange={(e) => setnickName(e.target.value)}
					className="nickname-input"
				/>
		</form>
        <button type="submit" className="save-nickName-button" onClick={changeNickname}>Save</button>
        </>
    )
}

export default NickNameEdit