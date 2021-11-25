import { Link } from "react-router-dom"

export default function AddButton() {
    return (
        <Link to="/createsession"><button type="button" className="btn btn-warning">Create a new movie session!</button></Link>
    )
}