import { createContext, useEffect, useState } from 'react'
import { X } from 'lucide-react';
import {useFormik} from 'formik'
import {v4 as uuidv4} from 'uuid'
//import { useNavigate } from 'react-router-dom'
import BooksItem from '../../BooksItem'

import './index.css'
//import BrowseBookDetails from '../BrowseBookDetails';
//import BrowseBookDetails from '../BrowseBookDetails';


const booksArray = [
    {
        id: 1,
        title: "Teach Like a Champion 2.0: 62 Techniques that Put Students on the Path to College",
        author: "Doug Lemov",
        image_url: "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 2,
        "title": "The First Days of School: How to Be an Effective Teacher",
        "author": "Harry K. Wong and Rosemary T. Wong",
        "image_url": "https://www.scholastic.com/harrykwong/images/hero.jpg"
    },
    {
        "id": 3,
        "title": "The Elements of Teaching",
        "author": "James M. Banner Jr. and Harold C. Cannon",
        "image_url": "https://www.scholastic.com/harrykwong/images/hero.jpg"
    },
    {
        "id": 4,
        "title": "Mindset: The New Psychology of Success",
        "author": "Carol S. Dweck",
        "image_url": "https://www.scholastic.com/harrykwong/images/hero.jpg"
    },
    {
        "id": 5,
        "title": "Educating Esmé: Diary of a Teacher's First Year",
        "author": "Esmé Raji Codell",
        "image_url": "https://www.scholastic.com/harrykwong/images/hero.jpg"
    },
    {
        "id": 6,
        "title": "The Teacher Wars: A History of America’s Most Embattled Profession",
        "author": "Dana Goldstein",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 7,
        "title": "What Great Teachers Do Differently: 17 Things That Matter Most",
        "author": "Todd Whitaker",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 8,
        "title": "The Book Whisperer: Awakening the Inner Reader in Every Child",
        "author": "Donalyn Miller",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 9,
        "title": "Fires in the Bathroom: Advice for Teachers from High School Students",
        "author": "Kathleen Cushman",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 10,
        "title": "Drive: The Surprising Truth About What Motivates Us",
        "author": "Daniel H. Pink",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 11,
        "title": "How Children Succeed: Grit, Curiosity, and the Hidden Power of Character",
        "author": "Paul Tough",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 12,
        "title": "The Art of Teaching",
        "author": "Gilbert Highet",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 13,
        "title": "The Daily Five: Fostering Literacy Independence in the Elementary Grades",
        "author": "Gail Boushey and Joan Moser",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 14,
        "title": "Why Don't Students Like School?: A Cognitive Scientist Answers Questions About How the Mind Works and What It Means for the Classroom",
        "author": "Daniel T. Willingham",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 15,
        "title": "The New Teacher Book: Finding Purpose, Balance and Hope During Your First Years in the Classroom",
        "author": "Rethinking Schools",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 16,
        "title": "Visible Learning for Teachers: Maximizing Impact on Learning",
        "author": "John Hattie",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 17,
        "title": "The Reading Zone: How to Help Kids Become Skilled, Passionate, Habitual, Critical Readers",
        "author": "Nancie Atwell",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 18,
        "title": "Tools for Teaching: Discipline, Instruction, Motivation",
        "author": "Fred Jones",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 19,
        "title": "The Homework Myth: Why Our Kids Get Too Much of a Bad Thing",
        "author": "Alfie Kohn",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    },
    {
        "id": 20,
        "title": "Teaching with Love and Logic: Taking Control of the Classroom",
        "author": "Charles Fay and Jim Fay",
        "image_url": "https://teachlikeachampion.org/wp-content/uploads/field-guide-cover.jpg"
    }
]
export const store = createContext([booksArray])

const Teacher = () => {
    
    //const navigate = useNavigate()
    // useEffect(()=>{
    //     if(isRegistered){
    //         setIsRegistered(true)
    //         navigate("/teacher")
    //     }else{
    //         navigate("/")
    //     }
    // }, [])

    const [userInput, setUserInput] = useState("")
    const [isClicked, setIsCliked] = useState(false)
    const [isAddBookClicked, setIsAddBookClicked] = useState(false)
    const [isEditBookClicked, setIsEditBookClicked] = useState(false)
    const [editBookId, setEditBookId] = useState(1)
    const [initialBooks, setInitialBooks] = useState(booksArray)
    const [defaultEditValues, setDefaultEditValues] = useState({})

    const formik = useFormik({
        initialValues : {
            title : "",
            author : "",
            image_url : ""
        },
        onSubmit : (values, {setSubmitting}) => {
            console.log("values", values)
            const newBook = {
                id : uuidv4(),
                title : values.title,
                image_url : values.image_url,
                author : values.author
            }
            setInitialBooks(prev => [...prev, newBook])
            
            //console.log("In Form Submit", initialBooks)
            setSubmitting(false)
            formik.resetForm()
            setTimeout(() => {
                setIsAddBookClicked(false)
                alert("New Book Added Successfully")
            }, 500)
            
            
        }
    })
    
    
    console.log("defaultValues", defaultEditValues)

    const initialValues = {
            title : defaultEditValues.title,
            author : defaultEditValues.author,
            image_url : defaultEditValues.image_url
    }
    console.log("initialValues", initialValues)


    const formik1 = useFormik({
        // initialValues : {
        //     title : defaultEditValues[0].title,
        //     author : defaultEditValues[0].author,
        //     image_url : defaultEditValues[0].image_url
        // },
         initialValues,
        onSubmit : values => {
            console.log("Edit Book values", values, editBookId)
            console.log("initialValues in Formik", initialValues)
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
                
            }, 200)
            
        }
    })
    
    useEffect(()=>{
        editBookId && setDefaultEditValues(initialBooks.find(each => each.id === editBookId))
    },[editBookId])

    useEffect(()=>{
        defaultEditValues &&
        formik1.setValues(defaultEditValues)
    },[defaultEditValues])
    
    let filteredResults = initialBooks.filter(eachBook => eachBook.title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase()))
    //setInitialBooks(filteredResults)
    const deleteSpecificBook = id => {
        const modifiedResults = initialBooks.filter(eachBook => eachBook.id !== id)
        setInitialBooks(modifiedResults)
    }

    const editSpecificBook = id => {
        setIsEditBookClicked(true)
        setEditBookId(id)
        setDefaultEditValues(initialBooks.filter(each => {
            return each.id === id
         }))
        console.log("edit Button Cliked", id)
    }

    console.log('In Component', initialBooks)
    const blurStyling = isAddBookClicked ? "blur-style" : ""
    const blurStyling1 = isEditBookClicked ? "blur-style" : ""

    return(
        <store.Provider value={[initialBooks]}>
        <div className="teacher-bg-container">
            <h1 className='teacher-heading'>This is Teacher DashBoard</h1>
            <div className='books-container'>
                <div className='input-container'> 
                    <input onChange={e => setUserInput(e.target.value)} className='search-bar' placeholder='Search Teacher Related Books' alt='img'/>
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
                    {!isClicked ? <button className='read-more-button' onClick={e => setIsCliked(true)}> Load More...</button> : null}
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
            {/* <BrowseBookDetails/> */}
        </div>
        
        </store.Provider>
    )
}
export default Teacher