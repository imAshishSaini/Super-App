import {useContext, useState, useEffect} from 'react'
import {AppContext} from '../context/AppContext'
import {useNavigate} from "react-router-dom"
import styles from './GenrePage.module.css' 
import defaultGenres from '../data/genres'

function GenrePage() {
    const [error, setError] = useState()
    const {selectedGenres, setSelectedGenres} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(selectedGenres.length >= 3) {
            setError(false)
        }
    }, [selectedGenres])

    const handleSelectGenre = (genre) => {
        //pop operation
        if(selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre))
        } else {
            //push operation
            setSelectedGenres([...selectedGenres, genre])
        }
    }

const handleNext = () => {
    if(selectedGenres.length < 3) {
        setError(true)
        return
    } else {
        navigate("/carousel")
    }
}

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h3 className={styles.heading}>Super App</h3>
            <h2 className={styles.subHeading}>Choose you entertainment category</h2>
            <div className={styles.selectedGenres}>
                {selectedGenres.map((genre, index) => (
                    <div onClick={() => {handleSelectGenre(genre)}} className={styles.selectedGenre} key={index}>
                        {genre}
                    </div>
                ))}
            </div>
            {error && <p className={styles.error}>Minimum 3 category required</p>}
        </div>

        <div className={styles.right}>
            <div className={styles.genres}>
                {defaultGenres.map((genre, index) => (
                    <div className={styles.genre} key={index} onClick={() => {handleSelectGenre(genre)}}>
                        {genre}
                    </div>
                ))}
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default GenrePage