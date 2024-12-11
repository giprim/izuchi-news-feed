
import { useSearch } from 'src/hooks/useSearch'
import { CardSkeleton } from 'src/components/cardSkeleton'
import RenderResults from './renderResults'
import SearchBar from 'src/components/searchbar'
import FilterModal from 'src/components/filterModal'

function Results() {
  const { data, isLoading, handleChange, ref, value } = useSearch()
  return (
    <>
      <SearchBar handleChange={handleChange} ref={ref} value={value} />
      <FilterModal />
      {isLoading ? <CardSkeleton /> : <RenderResults data={data} />}
    </>
  )
}

export default Results


