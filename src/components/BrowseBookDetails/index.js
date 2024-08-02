import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useContext } from "react"
import { store } from "../Teacher"
import './index.css'
import { store1 } from "../Student"
const BrowseBookDetails = () => {
    const initialBooks = useContext(store)
    const initialBooks1 = useContext(store1)
    console.log("initialBooks",initialBooks)
    const navigate = useNavigate()
    const {id} = useParams()
    const location = useLocation();
    //console.log("search", location.search)
    console.log("pathname", location.pathname)
    let data;
    if (location.pathname.includes("teacher")){
        data = initialBooks[0][id-1]
    }else{
        data = initialBooks1[0][id-1]
    }
    console.log("data",data)
    if(data === undefined){
        return <h1 className="book-not-found">Book Not Found</h1>
    }
    const gotoHomeComponent = () =>{
        if(location.pathname.includes("teacher")){
            navigate("/teacher")
        }else{
            navigate("/student")
        }
    }
    return(
        <div>
            <div className="browseBook-container">
                <div className="browser-container1">
                    <h1>{data.title}</h1>
                    <h3>Author : {data.author}</h3>
                    <p>Description :- Teaching is meant to be a very enjoyable and rewarding career field (although demanding and exhausting at times!).
                        You should only become a teacher if you love children and intend on caring for them with your heart. You cannot
                        expect the kids to have fun if you are not having fun with them! If you only read the instructions out of a textbook,
                        it's ineffective. Instead, make your lessons come alive by making it as interactive and engaging as possible. Let your
                        passion for teaching shine through each and everyday. Enjoy every teaching moment to the fullest.
                    </p>
                </div>

                <div className="browser-container2">
                    <img src={data.image_url} className="browseBook-img"/>
                </div>
                
                
            </div>
            <button className="back-button" type="button" onClick={gotoHomeComponent}>Back</button>
        </div>
    )
}
export default BrowseBookDetails 