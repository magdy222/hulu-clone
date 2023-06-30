import MovieCard from '../components/MovieCard'
import FlipMove from 'react-flip-move'

function Results ({results}) {
    return (
      <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3
      3xl:flex justify-center flex-wrap'>
           {results?.map(result =>{
              return <MovieCard key={result.id} result = {result}/>
           })}
      </FlipMove>
    )
  }
  
  export default Results