'use client'

import {useUser} from '@clerk/nextjs'
import{useRouter} from 'next/navigation'
import { POST } from '../api/checkout_sessions/route'

export default function Generate(){
    const {isloaded,isSignedIn,user}= useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const router = useRouter

    const handleSubmit=async ()=>{
        fetch('api/generate', {
            method: 'POST',
            body: text, 
        })
        .then((res)=>res.json())
        .then(data>setFlashcards(data))
    }

    const handleCardClick =(id)=>{
        setFlipped((prev)=>({
            ...prev, 
            [id]: !prev[id]        
    }))
}

const handleOpen =()=>{
    setOpenI(true)
}
const handleClose=()=>{
    setOpenI(false)
}
const saveFlashcards = aysnc()=> {
    if(!name){
        alert('Please enter a name')
        return
    }

    const batch = writeBatch(db)
    const userDocRef=doc(collection(db, 'users' ), user.id)
    const docSnap=await getDoc(userDocRef)

    if (docSnap.exits()){
        const collections = docSnap.data().flashcards || []
        if (collections.find((f) => f.name === name)){
            alert('Flashcard collection with the same name already exists.')
            return
        }else {
            collection.push({name})
            batch.set(userDocRef, {flashcards: collections}, {merge: true})
        }
    }
}

}