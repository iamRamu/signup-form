import { createContext, useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { X } from 'lucide-react';
import {useFormik} from 'formik'
//import { useNavigate } from 'react-router-dom'
import BooksItem from '../../BooksItem'
const booksArray = [
    {
        "id": 1,
        "title": "The 7 Habits of Highly Effective Teens",
        "author": "Sean Covey",
        "image_url": "https://www.hachettebookgroup.com/wp-content/uploads/2017/09/9780762414741.jpg"
    },
    {
        "id": 2,
        "title": "How to Win at College: Surprising Secrets for Success from the Country’s Top Students",
        "author": "Cal Newport",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 3,
        "title": "The Naked Roommate: And 107 Other Issues You Might Run Into in College",
        "author": "Harlan Cohen",
        "image_url": "https://www.hachettebookgroup.com/wp-content/uploads/2017/09/9780762414741.jpg"
    },
    {
        "id": 4,
        "title": "The Freshman Survival Guide: Soulful Advice for Studying, Socializing, and Everything In Between",
        "author": "Nora Bradbury-Haehl and Bill McGarvey",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 5,
        "title": "The Everything College Survival Book: All You Need to Get the Most out of College Life",
        "author": "Susan Fitzgerald and J. Lee Peters",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 6,
        "title": "College Hacks",
        "author": "Keith Bradford",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 7,
        "title": "How to College: What to Know Before You Go (and When You're There)",
        "author": "Andrea Malkin Brenner and Lara Schwartz",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 8,
        "title": "The Ultimate College Student Health Handbook: Your Guide for Everything from Hangovers to Homesickness",
        "author": "Jill Grimes",
        "image_url": "https://www.hachettebookgroup.com/wp-content/uploads/2017/09/9780762414741.jpg"
    },
    {
        "id": 9,
        "title": "The Secrets of College Success",
        "author": "Lynn F. Jacobs and Jeremy S. Hyman",
        "image_url": "https://www.hachettebookgroup.com/wp-content/uploads/2017/09/9780762414741.jpg"
    },
    {
        "id": 10,
        "title": "College (Un)bound: The Future of Higher Education and What It Means for Students",
        "author": "Jeffrey J. Selingo",
        "image_url": "https://www.hachettebookgroup.com/wp-content/uploads/2017/09/9780762414741.jpg"
    },
    {
        "id": 11,
        "title": "Make It Stick: The Science of Successful Learning",
        "author": "Peter C. Brown, Henry L. Roediger III, and Mark A. McDaniel",
        "image_url": "https://www.hachettebookgroup.com/wp-content/uploads/2017/09/9780762414741.jpg"
    },
    {
        "id": 12,
        "title": "Mindset: The New Psychology of Success",
        "author": "Carol S. Dweck",
        "image_url": "https://www.hachettebookgroup.com/wp-content/uploads/2017/09/9780762414741.jpg"
    },
    {
        "id": 13,
        "title": "The Power of Habit: Why We Do What We Do in Life and Business",
        "author": "Charles Duhigg",
        "image_url": "https://www.hachettebookgroup.com/wp-content/uploads/2017/09/9780762414741.jpg"
    },
    {
        "id": 14,
        "title": "Grit: The Power of Passion and Perseverance",
        "author": "Angela Duckworth",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 15,
        "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        "author": "James Clear",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 16,
        "title": "The 5 AM Club: Own Your Morning. Elevate Your Life.",
        "author": "Robin Sharma",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 17,
        "title": "Deep Work: Rules for Focused Success in a Distracted World",
        "author": "Cal Newport",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 18,
        "title": "The Happiness Advantage: How a Positive Brain Fuels Success in Work and Life",
        "author": "Shawn Achor",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 19,
        "title": "The Defining Decade: Why Your Twenties Matter--And How to Make the Most of Them Now",
        "author": "Meg Jay",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 20,
        "title": "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        "author": "Jen Sincero",
        "image_url": "https://m.media-amazon.com/images/I/91caiRU8a7L._AC_UF1000,1000_QL80_.jpg"
    }
]
export const store1 = createContext([booksArray])
const Student = () => {

    const [userInput, setUserInput] = useState("")
    const [isClicked, setIsCliked] = useState(false)
    const [isAddBookClicked, setIsAddBookClicked] = useState(false)
    const [isEditBookClicked, setIsEditBookClicked] = useState(false)
    const [editBookId, setEditBookId] = useState("")
    const [initialBooks, setInitialBooks] = useState(booksArray)
    const [defaultEditValues, setDefaultEditValues] = useState({})

    const formik = useFormik({
        initialValues : {
            title : "",
            author : "",
            image_url : ""
        },
        onSubmit : values => {
            console.log("values", values)
            const newBook = {
                id : uuidv4(),
                title : values.title,
                image_url : values.image_url,
                author : values.author
            }
            setInitialBooks(prev => [...prev, newBook])
            formik.resetForm()
            setTimeout(() => {
                setIsAddBookClicked(false)
                alert("New Book Added Successfully")
            }, 500)
        }
    })

    const initialValues = {
        title : defaultEditValues.title,
        author : defaultEditValues.author,
        image_url : defaultEditValues.image_url
    }
    console.log("initialValues", initialValues)

    const formik1 = useFormik({
        // initialValues : {
        //     title : "",
        //     author : "",
        //     image_url : ""
        // },
        initialValues,
        onSubmit : values => {
            console.log("values",values, editBookId)
            const EditedBook = initialBooks.map(everyBook => {
                if(everyBook.id === editBookId){
                    if(!values.title){
                        values.title = everyBook.title
                    }
                    if(!values.author){
                        values.author = everyBook.author
                    }
                    if(!values.image_url){
                        values.image_url = everyBook.image_url
                    }
                    return { id : editBookId,  title: values.title, image_url : values.image_url, author : values.author}
                }
                return everyBook
            })
            setInitialBooks(EditedBook)
            setTimeout(() => {
                setIsEditBookClicked(false)
                alert("Book Edited Succefully")
            }, 500)

            formik1.resetForm()
        }
    })

    

    useEffect(()=>{
        editBookId && setDefaultEditValues(initialBooks.find(each => each.id === editBookId))
    },[editBookId])

    useEffect(()=>{
        defaultEditValues &&
        formik1.setValues(defaultEditValues)
    },[defaultEditValues])

    const filteredResults = initialBooks.filter(eachBook => eachBook.title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase()))
    const deleteSpecificBook = id => {
        const modifiedResults = initialBooks.filter(eachBook => eachBook.id !== id)
        setInitialBooks(modifiedResults)
    }

    const editSpecificBook = id => {
        setIsEditBookClicked(true)
        setEditBookId(id)
        console.log("edit Button Cliked", id)
    }
    const blurStyling = isAddBookClicked ? "blur-style" : ""
    const blurStyling1 = isEditBookClicked ? "blur-style" : ""
    return(
        <store1.Provider value={[initialBooks]}>
        <div className="teacher-bg-container">
            <h1 className='teacher-heading'>This is Student DashBoard</h1>
            <div className='books-container'>
                <div className='input-container'> 
                    <input onChange={e => setUserInput(e.target.value)} className='search-bar' placeholder='Search Student Related Books'/>
                    <img src='https://www.svgrepo.com/show/7109/search.svg' className='img-size' alt='search-icon'/>
                </div>

                <button className='add-book' onClick={() => setIsAddBookClicked(true)}>Add+</button>

                <ul className={`books-container1 ${blurStyling} ${blurStyling1}`}>
                    {filteredResults.map(each => {
                        if (!isClicked){
                            if(each.id <= 10){
                                return <BooksItem booksdetails={each} key={each.id} deleteSpecificBook={deleteSpecificBook} editSpecificBook={editSpecificBook}/>
                            }
                        } else{
                            return <BooksItem booksdetails={each} key={each.id} deleteSpecificBook={deleteSpecificBook} editSpecificBook={editSpecificBook}/>
                        }
                    }
                    )}
                    {!isClicked ? <button className='read-more-button' onClick={e => setIsCliked(true)}>Load More...</button> : null}
                    {filteredResults.length === 0 ? <h2>No Books Available</h2> : ""}
                </ul>
            </div>

            {isAddBookClicked && 

                <form className='popup-bg-container' onSubmit={formik.handleSubmit} autoComplete='off'>
                    <button className='cross-button' onClick={() => setIsAddBookClicked(false)}><X/></button>
                    <div className='popup-container'>
                        <label htmlFor='title-name'>Title Name</label>
                        <br/>
                        <input id='title-name' name='title' value={formik.values.title} placeholder='Enter Book Title Name' className='popup-input' required onChange={formik.handleChange}/>
                        <br/>

                        <label htmlFor='image-url'>Image Url</label>
                        <br/>
                        <input id='image-url' name='image_url' value={formik.values.image_url} placeholder='Enter Book Image Url' className='popup-input' onChange={formik.handleChange}/>
                        <br/>

                        <label htmlFor='author'>Author Name</label>
                        <br/>
                        <input id='author' name='author' value={formik.values.author} placeholder='Enter Book Author Name' className='popup-input' required onChange={formik.handleChange}/>
                        <br/>
                        {/* <button onClick={()=> setIsAddBookClicked(false)} className='add-book-button'>Add Book</button> */}
                    </div>
                    <button type='submit' className='add-book-button'>Add Book</button>

                </form>

            }

            {isEditBookClicked && 

            <form className='popup-bg-container' onSubmit={formik1.handleSubmit} autoComplete='off'>
                <button className='cross-button' onClick={() => setIsEditBookClicked(false)}><X/></button>
                <div className='popup-container'>
                    <label htmlFor='title-name'>Title Name</label>
                    <br/>
                    <input id='title-name' name='title' value={formik1.values.title} placeholder='Enter Book Title Name' className='popup-input'  onChange={formik1.handleChange}/>
                    <br/>

                    <label htmlFor='image-url'>Image Url</label>
                    <br/>
                    <input id='image-url' name='image_url' value={formik1.values.image_url} placeholder='Enter Book Image Url' className='popup-input' onChange={formik1.handleChange}/>
                    <br/>

                    <label htmlFor='author'>Author Name</label>
                    <br/>
                    <input id='author' name='author' value={formik1.values.author} placeholder='Enter Book Author Name' className='popup-input'  onChange={formik1.handleChange}/>
                    <br/>
                    {/* <button onClick={()=> setIsAddBookClicked(false)} className='add-book-button'>Add Book</button> */}
                </div>
                <button type='submit' className='add-book-button'>Save Book</button>

            </form>

            }

        </div>
        </store1.Provider>
    )
}
export default Student