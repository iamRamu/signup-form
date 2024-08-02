import { Trash2, Pencil } from 'lucide-react'
import './index.css'
import { Link } from 'react-router-dom'
const BooksItem = props => {
    const {booksdetails, deleteSpecificBook, editSpecificBook} = props
    const {id, title, author, image_url} = booksdetails
    //console.log(booksdetails)
    const deleteBook = () => {
        deleteSpecificBook(id)
    }
    const editBook = () => {
        editSpecificBook(id)
        //console.log("edit Button clicked", id)
    }
    return(
        // <Link to={`books/${id}`} className='link-item'>
            <li key={id} className="list-container">
                <h1 className='list-heading'>{title}</h1>
                <Link to={`books/${id}`} className='link-item'>
                {/* <div className='list-img-container'> */}
                    <img src={image_url} className="img-book" alt={title}/>
                {/* </div> */}
                </Link>
                
                <p className='list-paragraph'>Author: {author}</p>
                <div className='buttons-container'>
                    <button className='edit-button' type='button' onClick={editBook}><Pencil color='#25a8fa'/></button>
                    <button className='delete-button' type='button' onClick={deleteBook}><Trash2 color='red'/></button>
                </div>
            </li>
        // </Link>
    )
}
export default BooksItem