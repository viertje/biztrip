import { Link } from "react-router-dom"

export default function Header(){

    return (
        <>
            <div className="mb-8 w-full bg-gradient-to-r from-cyan-800 to-indigo-900 flex justify-between py-4 items-center border-b-2 border-white">
                <Link className="mx-32 text-xl" to="/">
                    <img src="./logo.png" alt="logo" className="object-cover w-40 h-10 rounded-md" />
                </Link>

                <div className="flex gap-8 mx-32 text-xl">
                    <Link to="/Hotels">Hotels</Link>
                    <Link to="/Fluege">Flüge</Link>
                    <Link to="/Buchungen">Meine Buchungen</Link>
                </div>

            </div>
        </>
    )
}